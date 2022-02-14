import { reactive, toRefs } from 'vue'
import { getActors } from '../../../infraestructure/actors/getActors'

const state = reactive({
	loadingActors: false,
	errorActors: false,
	actorsToSelect: [],
})

export default () => {
	const loadActorsToSelect = async () => {
		try {
			state.loadingActors = true
			const actorsCollection = await getActors()
			state.actorsToSelect = actorsCollection.map((actor) => ({
				id: actor.id,
				name: `${actor.first_name} ${actor.last_name}`,
			}))
		} catch (error) {
			state.errorActors = true
		} finally {
			state.loadingActors = false
		}
	}

	const resetActors = () => {
		state.loadingActors = false
		state.errorActors = false
		state.actorsToSelect = []
	}

	return {
		...toRefs(state),
		loadActorsToSelect,
		resetActors,
	}
}
