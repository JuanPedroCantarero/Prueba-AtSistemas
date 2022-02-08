import { get } from '../axios'

export const getActors = async () => {
	try {
		const { data } = await get('actors')

		return data
	} catch (e) {
		console.error(e)
	}
}
