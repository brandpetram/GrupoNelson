# Grupo Nelson - Sitio Web

Sitio web de Grupo Nelson construido con Next.js 16 y componentes de `@brandpetram/componentes-2026`.

## Stack

- **Framework:** Next.js 16 / React 19
- **Estilos:** Tailwind CSS v4
- **Componentes:** @brandpetram/componentes-2026
- **Deploy:** Vercel

## Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

El sitio estara disponible en http://localhost:3000

## Estructura del Proyecto

```
grupo-nelson/
├── public/
│   ├── hero-poster-*.jpg       # Posters generados del video
│   ├── parques-industriales-*.mp4  # Video hero
│   └── from-tailwind-templates/    # Assets de componentes
├── src/
│   ├── app/
│   │   ├── page.tsx            # Pagina principal
│   │   ├── layout.tsx          # Layout root
│   │   └── globals.css         # Estilos globales
│   ├── components/
│   │   ├── hero-video-cover.tsx    # Hero con video de fondo
│   │   └── tarjeta-hero-original.tsx # Tarjeta hero (comparacion)
│   └── lib/
│       └── utils.ts            # Utilidades
├── scripts/
│   └── preparar-vercel.js      # Script de preparacion para Vercel
└── vercel.json                 # Configuracion de Vercel
```

## Dependencia Principal

El proyecto consume componentes de la libreria Brandpetram:

```typescript
// Componentes de marketing
import { TarjetaHero1 } from '@brandpetram/componentes-2026/marketing'

// Componentes UI
import { Button } from '@brandpetram/componentes-2026/ui'

// Componentes Tailark Pro
import { Features11 } from '@brandpetram/componentes-2026/tailark'

// Componentes de templates
import { NavBar, PrimerHero } from '@brandpetram/componentes-2026/templates'
```

## Deploy en Vercel

El proyecto esta configurado para deployar automaticamente en Vercel:

1. **Desarrollo local** usa `file:../componentes-brandpetram` (symlink)
2. **Vercel** usa la version del registro de GitHub Packages

El script `scripts/preparar-vercel.js` se ejecuta antes de `pnpm install` y:
- Detecta el entorno Vercel
- Reemplaza la dependencia local por la version del registro
- Crea `.npmrc` con el token de autenticacion

### Variables de Entorno en Vercel

- `NPM_AUTH_TOKEN` - Token de GitHub para GitHub Packages
- `CDN_KEY_SECRET` - (Opcional) Token para CDN de imagenes

## Comandos

```bash
pnpm dev      # Servidor de desarrollo
pnpm build    # Build de produccion
pnpm start    # Servidor de produccion
pnpm lint     # Linter
```

## Links

- **Produccion:** https://grupo-nelson.vercel.app
- **Repositorio:** https://github.com/brandpetram/GrupoNelson
