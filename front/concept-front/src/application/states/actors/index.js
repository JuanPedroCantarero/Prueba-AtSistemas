import { reactive, toRefs } from 'vue'
import { getActors } from '../../../infraestructure/actors/getActors'

const state = reactive({
	loadingActors: false,
	errorActors: false,
	actors: [],
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

	return {
		...toRefs(state),
		loadActorsToSelect,
	}
}
