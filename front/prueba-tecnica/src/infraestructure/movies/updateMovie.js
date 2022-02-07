import { put } from '../axios'

export const updateMovie = async (movie) => {
	try {
		const { data } = await put(`movies/${movie.id}`, movie)

		return data
	} catch (e) {
		console.error(e)
	}
}
