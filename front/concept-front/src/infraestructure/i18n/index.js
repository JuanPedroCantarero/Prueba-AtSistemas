import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'

export const SUPPORT_LOCALES = ['en', 'es']

export const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	locale: 'en',
	fallbackLocale: 'es',
	messages: {
		en,
		es,
	},
})
