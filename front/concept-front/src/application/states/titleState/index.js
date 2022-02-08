import { reactive, toRefs } from 'vue'

const state = reactive({
	title: '',
})

export default () => {
	const setTitle = (title) => {
		state.title = title
	}

	return {
		...toRefs(state),
		setTitle,
	}
}
