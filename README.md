# Planta Panelera Las Palmas — README técnico

> Sitio web informativo de la Planta Panelera Las Palmas. Frontend en **React + Vite** (SPA). Sin backend por el momento.

## Índice

- [Planta Panelera Las Palmas — README técnico](#planta-panelera-las-palmas--readme-técnico)
  - [Índice](#índice)
  - [Descripción](#descripción)
  - [Stack](#stack)
  - [Estado del proyecto](#estado-del-proyecto)
  - [Instalación y scripts](#instalación-y-scripts)
  - [Estructura del proyecto](#estructura-del-proyecto)
  - [Rutas y páginas](#rutas-y-páginas)
  - [Convenciones de UI](#convenciones-de-ui)
  - [Accesibilidad (A11y)](#accesibilidad-a11y)
  - [SEO y metas](#seo-y-metas)
  - [Despliegue en Vercel](#despliegue-en-vercel)
  - [Métricas de performance](#métricas-de-performance)
  - [Roadmap sugerido](#roadmap-sugerido)
  - [Contribución](#contribución)
  - [Licencia](#licencia)

---

## Descripción

Web corporativa para comunicar **misión, visión, productos y contacto** de la Planta Panelera Las Palmas. Construida como **SPA** con React y Vite.

## Stack

- **Frontend:** React 18 + Vite
- **Estilos:** CSS modular/BEM (o utilidades), variables CSS
- **Ruteo:** react-router-dom (SPA)
- **Deploy:** Vercel

## Estado del proyecto

- ✅ Frontend activo
- 🚫 Backend no requerido por ahora
- 🔗 Producción: *definir URL de Vercel si aplica*

## Instalación y scripts

```bash
# 1) Clonar
git clone https://github.com/98141/PlantaPaneleraLasPalmas.git
cd PlantaPaneleraLasPalmas

# 2) Instalar dependencias
npm install

# 3) Desarrollo con HMR
npm run dev

# 4) Build de producción
npm run build

# 5) Vista previa del build
npm run preview
```

## Estructura del proyecto

PlantaPaneleraLasPalmas/
├─ public/                 # estáticos públicos (favicon, manifest, og-images)
├─ images/                 # imágenes de marca y contenido
├─ src/
│  ├─ assets/              # fuentes, íconos, estilos compartidos
│  ├─ components/          # UI reutilizable (NavBar, Header, Footer, Button, Card)
│  ├─ blocks/              # secciones compuestas (Hero, Features, CTA)
│  ├─ pages/               # páginas enrutadas (Inicio, Company, Contact)
│  ├─ hooks/               # hooks personalizados (si aplica)
│  ├─ utils/               # helpers, constantes
│  ├─ router.jsx           # definición de rutas SPA
│  ├─ main.jsx             # punto de entrada React
│  └─ App.jsx              # shell principal
├─ vendor/                 # librerías estáticas no via npm (opcional)
├─ index.html              # plantilla raíz Vite
├─ package.json
└─ vite.config.js

> Nota: si tu árbol difiere, ajusta `pages/` y `router.jsx` según convenga. Mantén componentes pequeños y reutilizables.

## Rutas y páginas

Rutas confirmadas y sugeridas para esta versión:

- `/` — **Inicio**  
  Hero con claim de valor, imagen destacada (planta/panela) y CTA hacia Contacto.

- `/company` — **Empresa**  
  Sección **Misión** y **Visión** en layout zigzag (una sección por fila, alternando imagen/texto). Puede incluir **Historia** y **Valores**.

- `/contact` — **Contacto**  
  Botón de **WhatsApp** (formato `https://wa.me/<indicativo><tel>?text=<msg>`), correo y teléfono. Ubicación/mapa opcional.

> Páginas opcionales (si decides activarlas):
>
> - `/products` — **Productos**: presentaciones de panela (granulada, bloque), ficha técnica PDF.  
> - `/process` — **Proceso**: cultivo, molienda, cocción, control de calidad, galería.

## Convenciones de UI

- **Marca:** logotipo + nombre con degradado (texto con `background-clip: text`), sombra sutil y contraste suficiente.
- **Layout:** grid responsivo (1 columna en móviles, 2 en escritorio). Evitar “texto en línea” en Company; usar secciones apiladas en zigzag.
- **Botones/links:** tamaño objetivo mínimo 44×44 px; estados `:hover`, `:focus-visible`, `:disabled` definidos.
- **CSS:** variables en `:root` para paleta cálida (tonos panela/caña). Evitar estilos inline.

## Accesibilidad (A11y)

- Un solo `h1` por página. Jerarquía semántica (`h2` Misión, `h2` Visión, etc.).
- `alt` descriptivo en imágenes (no repetir “imagen de…”).
- Orden de tabulación lógico; **foco visible**; `aria-label` en iconos sin texto.
- Contraste AA mínimo (verifica con Lighthouse/axe).

## SEO y metas

- Título y meta-descripción específicas por ruta.
- Open Graph/Twitter Card en `index.html` o por ruta (si usas react-helmet).
- URL legibles: `/empresa`, `/productos`, `/proceso`, `/contacto` (opcional alias en ES).
- `sitemap.xml` y `robots.txt` (si es necesario).

## Despliegue en Vercel

1. Importa el repo en Vercel.
2. Framework: **Vite**.
3. Build: `npm run build` — Output: `dist/`.
4. SPA fallback: habilita **“Rewrite 404 to /index.html”** (o `vercel.json` con fallback).
5. Variables de entorno: no requeridas hoy.

## Métricas de performance

- **LCP < 2.5 s**, **CLS < 0.1**, **INP < 200 ms** (orientativo).
- Optimiza imágenes (WebP/AVIF), `loading="lazy"`, `srcset` y tamaños correctos.
- Minimiza JS/CSS; revisa divisiones de código y caché.

## Roadmap sugerido

- [ ] Company con fotos optimizadas y línea de tiempo del proceso.
- [ ] Página de Productos con ficha técnica descargable (PDF).
- [ ] Formulario de contacto con validación + honeypot/recaptcha.
- [ ] PWA básico (manifest + service worker) para modo offline.
- [ ] Implementar i18n (es/en) si se requiere presencia internacional.
- [ ] Integrar analítica (GTM/GA4 o alternativa privacy-first).

## Contribución

- Convención de ramas: `feat/`, `fix/`, `chore/`, `docs/`.
- Commits semánticos (Conventional Commits).
- PRs pequeñas con screenshot/GIF del cambio visual.

## Licencia

MIT (o la que definas).
