import { put } from '../axios'

export const updateActor = async (actor) => {
	try {
		const { data } = await put(`actors/${actor.id}`, actor)

		return data
	} catch (e) {
		console.error(e)
	}
}
