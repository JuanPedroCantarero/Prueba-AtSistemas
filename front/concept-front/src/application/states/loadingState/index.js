import { reactive, toRefs } from 'vue'

const state = reactive({
	loading: false,
})

export default () => {
	const setLoading = (loading) => {
		state.loading = loading
	}

	return {
		...toRefs(state),
		setLoading,
	}
}
