import { post } from '../axios'

export const createActor = async (actor) => {
	try {
		const { data } = await post('actors', actor)

		return data
	} catch (e) {
		console.error(e)
	}
}
