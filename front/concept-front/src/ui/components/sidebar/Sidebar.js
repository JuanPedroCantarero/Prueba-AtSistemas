import { defineAsyncComponent, ref } from 'vue'
import { CONFIG } from './config'
import titleState from '../../../application/states/titleState'

export default {
	components: {
		IconButton: defineAsyncComponent(() => import('../iconButton/IconButton.vue')),
	},
	setup() {
		const open = ref(false)
		const { title } = titleState()
		const itemsSidebar = ref(CONFIG.ROUTES)

		return {
			itemsSidebar,
			title,
			open,
		}
	},
}
