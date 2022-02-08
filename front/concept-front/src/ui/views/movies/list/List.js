import { defineAsyncComponent, onMounted } from 'vue'
import movieState from '../../../../application/states/movies'

export default {
	name: 'Movies',
	components: {
		IconButton: defineAsyncComponent(() => import('../../../components/iconButton/IconButton.vue')),
		Card: defineAsyncComponent(() => import('../../../components/card/Card.vue')),
	},
	setup() {
		const { loadMovies, movies } = movieState()

		onMounted(async () => {
			await loadMovies()
		})

		return {
			movies,
		}
	},
}
