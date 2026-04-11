#!/bin/bash
# workspace-nelson.sh — Worktrees de Grupo Nelson en tmux
#
# Uso:
#   ./workspace-nelson.sh                — Menú interactivo (elige grupo A o B)
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
  "revisar-ctas|wt/revisar-ctas|Auditoría y mejora de CTAs del sitio"
)

# Por defecto usar grupo A
WORKTREES=("${WORKTREES_A[@]}")
ACTIVE_GROUP="a"
MAIN_PORT=3002
DEV_BASE_PORT=3003

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

select_group() {
  echo ""
  echo "=== Workspace Nelson ==="
  echo ""
  echo "  a) Grupo A — Secciones (fase anterior)"
  echo "  b) Grupo B — Terminar sitio (fase actual) [dev servers en :$MAIN_PORT, :$DEV_BASE_PORT+]"
  echo "  q) Salir"
  echo ""
  read -rp "¿Qué grupo? [a/b/q]: " GROUP_INPUT

  case "$GROUP_INPUT" in
    a)
      WORKTREES=("${WORKTREES_A[@]}")
      ACTIVE_GROUP="a"
      ;;
    b)
      WORKTREES=("${WORKTREES_B[@]}")
      ACTIVE_GROUP="b"
      ;;
    q)
      echo "Cancelado."
      exit 0
      ;;
    *)
      echo "Opción inválida."
      exit 1
      ;;
  esac
}

show_menu() {
  echo ""
  echo "Worktrees disponibles:"
  echo ""

  for i in "${!WORKTREES[@]}"; do
    IFS='|' read -r slug branch desc <<< "${WORKTREES[$i]}"
    local status="  "
    if [[ -d "$PROJECT_DIR/.worktrees/$slug" ]]; then
      status="✓ "
    fi
    local port_info=""
    if [[ "$ACTIVE_GROUP" == "b" ]]; then
      port_info=" [:$((DEV_BASE_PORT + i))]"
    fi
    echo "  $((i+1))) $status$slug$port_info — $desc"
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
    _seen=" "
    read -ra tokens <<< "$INPUT"
    for num in "${tokens[@]}"; do
      # Solo aceptar números
      if ! [[ "$num" =~ ^[0-9]+$ ]]; then
        echo "Ignorando '$num' (no es un número)"
        continue
      fi
      idx=$((num-1))
      if [[ $idx -ge 0 && $idx -lt ${#WORKTREES[@]} ]]; then
        # Deduplicar (compatible con Bash 3.2, sin associative arrays)
        if [[ "$_seen" != *" $idx "* ]]; then
          SELECTED+=("$idx")
          _seen+="$idx "
        else
          echo "Ignorando '$num' (duplicado)"
        fi
      else
        echo "Ignorando '$num' (fuera de rango)"
      fi
    done
    unset _seen
  fi
}

# --- Parsear argumentos ---

SELECTED=()

if [[ $# -eq 0 ]]; then
  select_group
  show_menu
elif [[ "$1" == "b" ]]; then
  WORKTREES=("${WORKTREES_B[@]}")
  ACTIVE_GROUP="b"
  if [[ "$2" == "all" ]]; then
    SELECTED=("${!WORKTREES[@]}")
  else
    show_menu
  fi
elif [[ "$1" == "a" ]]; then
  WORKTREES=("${WORKTREES_A[@]}")
  ACTIVE_GROUP="a"
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

# Ventana inicial: MAIN como orquestador (repo principal)
MAIN_WIN=$(tmux display-message -t "$SESSION" -p '#{window_id}')
tmux rename-window -t "$MAIN_WIN" "MAIN_ORQUESTADOR"
if [[ "$ACTIVE_GROUP" == "b" ]]; then
  # Panel superior: dev server en puerto MAIN_PORT
  tmux send-keys -t "$MAIN_WIN" "cd '$PROJECT_DIR' && pnpm run dev --port $MAIN_PORT" Enter
  # Panel inferior: claude
  CLAUDE_PANE=$(tmux split-window -v -t "$MAIN_WIN" -PF '#{pane_id}')
  tmux send-keys -t "$CLAUDE_PANE" "cd '$PROJECT_DIR' && claude" Enter
  tmux select-pane -t "$CLAUDE_PANE"
else
  tmux send-keys -t "$MAIN_WIN" "cd '$PROJECT_DIR' && claude" Enter
fi

# Una ventana por worktree seleccionado
FIRST_WT_WIN=""
for idx in "${SELECTED[@]}"; do
  IFS='|' read -r slug branch desc <<< "${WORKTREES[$idx]}"
  local_name=$(echo "$slug" | tr '[:lower:]-' '[:upper:]_')
  wt_dir="$PROJECT_DIR/.worktrees/$slug"

  WT_WIN=$(tmux new-window -t "$SESSION" -n "$local_name" -PF '#{window_id}')
  [[ -z "$FIRST_WT_WIN" ]] && FIRST_WT_WIN="$WT_WIN"

  if [[ "$ACTIVE_GROUP" == "b" ]]; then
    port=$((DEV_BASE_PORT + idx))
    # Panel superior: dev server
    tmux send-keys -t "$WT_WIN" "cd '$wt_dir' && pnpm run dev --port $port" Enter
    # Panel inferior: claude
    CLAUDE_PANE=$(tmux split-window -v -t "$WT_WIN" -PF '#{pane_id}')
    tmux send-keys -t "$CLAUDE_PANE" "cd '$wt_dir' && claude" Enter
    tmux select-pane -t "$CLAUDE_PANE"
  else
    tmux send-keys -t "$WT_WIN" "cd '$wt_dir' && claude" Enter
  fi
done

# Ir a la primera ventana de worktree (no main)
if [[ -n "$FIRST_WT_WIN" ]]; then
  tmux select-window -t "$FIRST_WT_WIN"
fi
tmux attach -t "$SESSION"
