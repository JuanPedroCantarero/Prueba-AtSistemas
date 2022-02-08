import { Movie } from '../../../../domain/movie/movie'
import { onMounted, ref, defineAsyncComponent } from 'vue'
import Multiselect from '@vueform/multiselect'
import actorsState from '../../../../application/states/actors'
import Vue3StarRatings from 'vue3-star-ratings'

export default {
	components: {
		Multiselect,
		Vue3StarRatings,
		IconButton: defineAsyncComponent(() => import('../../../components/iconButton/IconButton.vue')),
	},
	emits: ['save'],
	props: {
		movieProp: { default: new Movie({}) },
	},
	setup({ movieProp }, { emit }) {
		const innerMovie = ref(null)
		const textToAddGenre = ref('')

		const { loadActorsToSelect, actorsToSelect, loadingActors } = actorsState()

		onMounted(async () => {
			await loadActorsToSelect()
			innerMovie.value = new Movie({
				id: movieProp.id,
				title: movieProp.title,
				poster: movieProp.poster,
				actors: movieProp.actors,
				duration: movieProp.duration,
				genre: movieProp.genre,
				imdbRating: movieProp.imdbRating,
				year: movieProp.year,
			})
		})
		const addGenre = () => {
			if (textToAddGenre.value && !innerMovie.value.genre.includes(textToAddGenre.value)) {
				innerMovie.value.genre.push(textToAddGenre.value)
				textToAddGenre.value = ''
			}
		}
		const deleteGenre = (position) => {
			if (innerMovie.value.genre[position]) {
				innerMovie.value.genre.splice(position, 1)
			}
		}

		const emitMovie = () => {
			emit('save', innerMovie.value)
		}
		return {
			emitMovie,
			actorsToSelect,
			textToAddGenre,
			loadingActors,
			innerMovie,
			addGenre,
			deleteGenre,
		}
	},
}
