import { reactive, toRefs } from 'vue'
import { getCompanies } from '../../../infraestructure/companies/getCompanies'

const state = reactive({
	loadingCompanies: false,
	errorCompanies: false,
	companies: [],
})

export default () => {
	const loadCompanies = async () => {
		try {
			state.loadingCompanies = true
			state.companies = await getCompanies()
		} catch (error) {
			state.errorCompanies = true
		} finally {
			state.loadingCompanies = false
		}
	}

	const resetCompanies = () => {
		state.loadingCompanies = false
		state.errorCompanies = false
		state.companies = []
	}

	return {
		...toRefs(state),
		loadCompanies,
		resetCompanies,
	}
}
