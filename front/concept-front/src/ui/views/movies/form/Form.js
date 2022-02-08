import { Movie } from '../../../../domain/movie/movie'
import { computed } from 'vue'

export default {
	props: {
		movie: { default: new Movie({}) },
	},
	setup({ movie }) {
		console.log(movie)
		const isEdit = computed(() => movie.id !== null)

		return {
			movie,
			isEdit,
		}
	},
}
