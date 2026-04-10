#!/bin/bash
# workspace-nelson.sh — Worktrees de Grupo Nelson en tmux
#
# Uso:
#   ./workspace-nelson.sh                — Menú interactivo (grupo A)
#   ./workspace-nelson.sh b              — Abrir worktrees del grupo B (terminar sitio)
#   ./workspace-nelson.sh all            — Abrir todos los worktrees del grupo activo
#   ./workspace-nelson.sh excelencia certificaciones  — Abrir solo esos dos
#
# Modelo operativo:
#   MAIN_ORQUESTADOR — coordina, documenta, actualiza docs/copy/*
#   Worktrees        — ejecutan trabajo por sección (solo archivos de su sección)
#
# Cada worktree se abre en su propia ventana de tmux con Claude Code.
# La ventana principal (MAIN_ORQUESTADOR) siempre tiene su propia ventana.

PROJECT_DIR="$HOME/Proyectos/grupo-nelson"
SESSION="nelson"

# --- Grupos de worktrees ---

# Grupo A: Secciones (fase anterior)
WORKTREES_A=(
  "excelencia-operativa|section/excelencia-operativa|Implementar brief de excelencia operativa"
  "certificaciones|section/certificaciones|Brief + implementación de certificaciones"
  "casos-de-exito|section/casos-de-exito|Página casos de éxito"
  "liderazgo|section/liderazgo|Página liderazgo Nelson"
  "contacto|section/contacto|Página de contacto"
  "recursos|section/recursos|Página de recursos"
)

# Grupo B: Terminar sitio (fase actual)
WORKTREES_B=(
  "index|wt/index|ScrollStorytelling — copy y assets de la página principal"
  "liderazgo-v2|wt/liderazgo|Ajustes visuales página de liderazgo"
  "nuestra-historia|wt/nuestra-historia|Componentes estilo orben-tech para nuestra historia"
  "blog|wt/blog|Revisar y mejorar página del blog"
  "ingles|wt/ingles|Traducción del sitio al inglés"
  "instrucciones|wt/instrucciones|Sección protegida con guías para editar Sanity"
)

# Por defecto usar grupo A
WORKTREES=("${WORKTREES_A[@]}")

# --- Funciones ---

create_worktree() {
  local slug="$1"
  local branch="$2"
  local wt_dir="$PROJECT_DIR/.worktrees/$slug"

  if [[ -d "$wt_dir" ]]; then
    echo "  ✓ $slug (worktree ya existe)"
    return 0
  fi

  # Crear branch si no existe
  if ! git -C "$PROJECT_DIR" show-ref --verify --quiet "refs/heads/$branch" 2>/dev/null; then
    git -C "$PROJECT_DIR" branch "$branch" main
    echo "  + branch $branch creada desde main"
  fi

  # Crear directorio padre si no existe
  mkdir -p "$PROJECT_DIR/.worktrees"

  # Crear worktree
  git -C "$PROJECT_DIR" worktree add "$wt_dir" "$branch" 2>/dev/null
  echo "  + worktree $slug creado en $wt_dir"
}

show_menu() {
  echo ""
  echo "=== Workspace Nelson — Worktrees ==="
  echo ""
  echo "Worktrees disponibles:"
  echo ""

  for i in "${!WORKTREES[@]}"; do
    IFS='|' read -r slug branch desc <<< "${WORKTREES[$i]}"
    local status="  "
    if [[ -d "$PROJECT_DIR/.worktrees/$slug" ]]; then
      status="✓ "
    fi
    echo "  $((i+1))) $status$slug — $desc"
  done

  echo ""
  echo "  a) Todos"
  echo "  q) Salir"
  echo ""
  read -rp "Worktrees a abrir (separados por espacio, ej: 1 2): " INPUT

  if [[ "$INPUT" == "q" ]]; then
    echo "Cancelado."
    exit 0
  fi

  if [[ "$INPUT" == "a" ]]; then
    SELECTED=("${!WORKTREES[@]}")
  else
    SELECTED=()
    for num in $INPUT; do
      idx=$((num-1))
      if [[ $idx -ge 0 && $idx -lt ${#WORKTREES[@]} ]]; then
        SELECTED+=("$idx")
      else
        echo "Ignorando '$num' (fuera de rango)"
      fi
    done
  fi
}

# --- Parsear argumentos ---

SELECTED=()

if [[ $# -eq 0 ]]; then
  show_menu
elif [[ "$1" == "b" ]]; then
  WORKTREES=("${WORKTREES_B[@]}")
  if [[ "$2" == "all" ]]; then
    SELECTED=("${!WORKTREES[@]}")
  else
    show_menu
  fi
elif [[ "$1" == "a" ]]; then
  WORKTREES=("${WORKTREES_A[@]}")
  if [[ "$2" == "all" ]]; then
    SELECTED=("${!WORKTREES[@]}")
  else
    show_menu
  fi
elif [[ "$1" == "all" ]]; then
  SELECTED=("${!WORKTREES[@]}")
else
  # Buscar por slug
  for arg in "$@"; do
    found=false
    for i in "${!WORKTREES[@]}"; do
      IFS='|' read -r slug branch desc <<< "${WORKTREES[$i]}"
      if [[ "$slug" == "$arg" ]]; then
        SELECTED+=("$i")
        found=true
        break
      fi
    done
    if [[ "$found" == false ]]; then
      echo "Worktree '$arg' no encontrado. Slugs disponibles:"
      for wt in "${WORKTREES[@]}"; do
        IFS='|' read -r slug _ _ <<< "$wt"
        echo "  - $slug"
      done
      exit 1
    fi
  done
fi

if [[ ${#SELECTED[@]} -eq 0 ]]; then
  echo "No seleccionaste ningún worktree."
  exit 0
fi

# --- Crear worktrees ---

echo ""
echo "Preparando worktrees..."

for idx in "${SELECTED[@]}"; do
  IFS='|' read -r slug branch desc <<< "${WORKTREES[$idx]}"
  create_worktree "$slug" "$branch"
done

# --- Agregar .worktrees/ a .gitignore si no está ---

if ! grep -q "^\.worktrees/" "$PROJECT_DIR/.gitignore" 2>/dev/null; then
  echo ".worktrees/" >> "$PROJECT_DIR/.gitignore"
  echo ""
  echo "  + .worktrees/ agregado a .gitignore"
fi

# --- tmux ---

echo ""
echo "Abriendo sesión tmux '$SESSION'..."

if tmux has-session -t "$SESSION" 2>/dev/null; then
  echo "Sesión '$SESSION' ya existe. Conectando..."
  tmux attach -t "$SESSION"
  exit 0
fi

tmux new-session -d -s "$SESSION"
WIN=0

# Ventana 0: MAIN como orquestador (repo principal)
tmux rename-window -t "$SESSION:0" "MAIN_ORQUESTADOR"
tmux send-keys -t "$SESSION:0" "cd $PROJECT_DIR && claude" Enter
WIN=1

# Una ventana por worktree seleccionado
for idx in "${SELECTED[@]}"; do
  IFS='|' read -r slug branch desc <<< "${WORKTREES[$idx]}"
  local_name=$(echo "$slug" | tr '[:lower:]-' '[:upper:]_')
  wt_dir="$PROJECT_DIR/.worktrees/$slug"

  tmux new-window -t "$SESSION" -n "$local_name"
  tmux send-keys -t "$SESSION:$WIN" "cd $wt_dir && claude" Enter
  WIN=$((WIN+1))
done

# Ir a la primera ventana de worktree (no main)
tmux select-window -t "$SESSION:1"
tmux attach -t "$SESSION"
