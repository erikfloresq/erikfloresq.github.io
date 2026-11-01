# Contexto del proyecto

## Qué contiene

Sitio personal estático de Erik Flores, publicado en GitHub Pages en `https://erikfloresq.github.io`. Está construido con Astro y presenta un blog técnico, páginas personales y landings de apps.

## Tecnologías y configuración

- Astro con TypeScript en modo estricto; páginas, layouts y componentes se escriben principalmente en `.astro`.
- Integraciones: MDX, sitemap y Pagefind. La búsqueda se genera sobre el contenido del build.
- Idiomas: español (`es`, idioma predeterminado sin prefijo) e inglés (`en`, bajo `/en/`). La configuración está en `astro.config.mjs`; textos de interfaz en `src/i18n/ui.ts` y utilidades en `src/i18n/utils.ts`.
- Contenido del blog: colección Astro declarada en `src/content.config.ts`, con Markdown/MDX en `src/content/blog/` y esquema de frontmatter tipado.
- Estilos globales: `src/styles/global.css`; estilos de componentes y páginas suelen estar junto al markup.
- Recursos estáticos: `public/`; sus rutas en el sitio se usan desde raíz (por ejemplo `/images/...`).
- No hay framework de UI adicional ni suite de tests configurada en `package.json`.

## Estructura principal

- `src/pages/`: rutas. Las páginas de español están en raíz; las inglesas bajo `src/pages/en/`.
- `src/pages/blog/[...slug].astro` y `src/pages/en/blog/[...slug].astro`: generan las rutas de cada idioma filtrando los IDs `es/` y `en/` de la colección.
- `src/layouts/BlogPost.astro`: layout compartido de artículos.
- `src/components/`: cabecera, pie, head, búsqueda y componentes de páginas de apps.
- `src/data/apps.ts`: catálogo que alimenta las grillas de `/apps` y `/en/apps`.
- `src/content/blog/{es,en}/`: artículos por idioma. Los artículos traducidos comparten normalmente el slug; mantener ambas versiones alineadas cuando se edite contenido bilingüe.
- `public/`: imágenes, videos, fuentes y scripts servidos sin procesamiento de ruta.
- `.github/workflows/astro.yml`: despliega a GitHub Pages al hacer push a `main` o manualmente. Usa Node 22 y la acción de Astro.

## Convenciones para cambios

- Mantén el comportamiento bilingüe: al añadir o modificar una ruta de contenido visible, revisa la versión equivalente en el otro idioma y los enlaces del selector de idioma.
- Para artículos nuevos, crea el archivo en el directorio de idioma correcto e incluye `title`, `description` y `pubDate` válidos. `updatedDate`, `heroImage` y `thumbnail` son opcionales según el esquema; revisa cómo el listado/layout renderiza las imágenes antes de omitirlas.
- Al añadir una app al catálogo, actualiza `src/data/apps.ts` y crea o ajusta sus páginas bajo `src/pages/<slug>/`; implementa las rutas inglesas si esa landing debe estar localizada. Mantén enlaces y plataformas coherentes con `AppEntry`.
- Reutiliza las traducciones y componentes existentes cuando corresponda; evita duplicar cadenas de interfaz entre idiomas fuera del mapa `ui`.
- Usa rutas absolutas desde la raíz del sitio para archivos de `public/`. Ten en cuenta que las páginas de GitHub Pages son estáticas.
- Respeta el formato del archivo que edites; Astro y TypeScript existentes usan tabulaciones con frecuencia. No reformatees archivos completos por cambios puntuales.
- No añadas dependencias sin necesidad; si agregas una, actualiza y conserva `package-lock.json`.

## Comandos útiles

- `npm run dev`: servidor local de desarrollo.
- `npm run build`: ejecuta `astro check` y genera el sitio estático en `dist/`.
- `npm run preview`: sirve localmente el build.
- `npm run postbuild`: indexa `dist/` con Pagefind (el script está declarado aparte; inspecciona el flujo antes de asumir que corre automáticamente).

No hay un script de tests configurado. Ejecuta comprobaciones pertinentes al cambio; para cambios de rutas, contenido o componentes, `npm run build` es la verificación principal cuando el usuario solicita verificar o cuando el cambio lo requiere.
