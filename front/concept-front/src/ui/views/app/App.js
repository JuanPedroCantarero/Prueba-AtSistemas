import Sidebar from '../../components/sidebar/Sidebar.vue'
import Loading from '../../components/loading/Loading.vue'
import loadingState from '../../../application/states/loadingState'

export default {
	name: 'App',
	components: {
		Sidebar,
		Loading,
	},
	setup() {
		const { loading } = loadingState()

		return {
			loading,
		}
	},
}
