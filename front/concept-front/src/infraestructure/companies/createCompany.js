import { post } from '../axios'

export const createCompany = async (movie) => {
	try {
		const { data } = await post('companies', movie)

		return data
	} catch (e) {
		console.error(e)
	}
}
