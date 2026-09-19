// Catálogo de apps que se muestran en /apps y /en/apps.
// Para añadir una app nueva: agrega una entrada aquí y crea su landing
// en src/pages/<slug>/index.astro (junto con sus páginas de soporte,
// como la política de privacidad).

export type AppPlatform = 'iOS' | 'iPadOS' | 'macOS' | 'watchOS' | 'Android' | 'Web';

export interface AppEntry {
	/** Identificador corto, coincide con la carpeta en src/pages. */
	slug: string;
	name: string;
	/** Frase corta que se muestra en la tarjeta de la grilla. */
	tagline: Record<'es' | 'en', string>;
	/** Ruta a un icono en /public. Si es null se dibuja un monograma con la inicial. */
	icon: string | null;
	/** Landing interna de la app, sin prefijo de idioma (ej. '/verbs/'). */
	path: string;
	platforms: AppPlatform[];
	links?: {
		appStore?: string;
		playStore?: string;
	};
}

export const apps: AppEntry[] = [
	{
		slug: 'verbs',
		name: 'Verbs',
		tagline: {
			es: 'Verbos en inglés en tu iPhone.',
			en: 'English verbs on your iPhone.',
		},
		icon: null,
		path: '/verbs/',
		platforms: ['iOS'],
		links: {
			appStore: 'https://apps.apple.com/pe/app/verbs/id1323891770',
		},
	},
	{
		slug: 'fanxis',
		name: 'Fanxis',
		tagline: {
			es: 'Voz a texto en vivo para conversar en una sola pantalla.',
			en: 'Live speech-to-text for a conversation on one screen.',
		},
		icon: '/images/fanxis/icon.svg',
		path: '/fanxis/',
		platforms: ['iOS', 'iPadOS'],
		links: {
			// Sin código de país: Apple manda a cada visitante a su propia tienda.
			appStore: 'https://apps.apple.com/app/fanxis-live-captions/id1278678458',
		},
	},
];
