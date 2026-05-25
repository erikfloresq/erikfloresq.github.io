export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.search': 'Buscar',
    'search.placeholder': 'Buscar publicaciones...',
    'search.noResults': 'No se encontraron resultados',
    'blog.title': 'Mi Blog',
    'blog.description': 'Publicaciones sobre desarrollo de software y tecnología.',
    'blog.readTime': 'min de lectura',
    'blog.published': 'Publicado el',
    'blog.back': 'Volver al blog',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.search': 'Search',
    'search.placeholder': 'Search posts...',
    'search.noResults': 'No results found',
    'blog.title': 'My Blog',
    'blog.description': 'Posts about software development and technology.',
    'blog.readTime': 'min read',
    'blog.published': 'Published on',
    'blog.back': 'Back to blog',
    'footer.rights': 'All rights reserved.',
  },
} as const;
