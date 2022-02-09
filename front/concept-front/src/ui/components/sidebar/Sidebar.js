import { defineAsyncComponent, ref } from 'vue'
import { CONFIG } from './config'
import titleState from '../../../application/states/titleState'
import { SUPPORT_LOCALES } from '../../../infraestructure/i18n'
import { useI18n } from 'vue-i18n'

export default {
	components: {
		IconButton: defineAsyncComponent(() => import('../iconButton/IconButton.vue')),
	},
	setup() {
		const open = ref(false)
		const { title } = titleState()
		const itemsSidebar = ref(CONFIG.ROUTES)
		const { locale } = useI18n()
		const lenguajes = ref(SUPPORT_LOCALES)

		return {
			itemsSidebar,
			title,
			locale,
			lenguajes,
			open,
		}
	},
}
