import { CONFIG } from './config'

export default {
	emits: ['click'],
	props: {
		classButton: { default: CONFIG.DEFAULT_CLASS },
	},
	setup({ classButton }) {
		return {
			classButton,
		}
	},
}
