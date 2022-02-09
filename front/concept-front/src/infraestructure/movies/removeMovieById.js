import { deleteItem } from '../axios'

export const removeMovieById = async (id) => {
	try {
		await deleteItem(`movies/${id}`)

		return true
	} catch (e) {
		console.error(e)
	}
}
