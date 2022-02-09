import { InstanciedMovie, Movie } from '../../../../domain/movie/movie'
import { onMounted, ref, defineAsyncComponent, watch } from 'vue'
import Multiselect from '@vueform/multiselect'
import actorsState from '../../../../application/states/actors'
import companyState from '../../../../application/states/company'
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
		const errorsForm = ref({})
		const makeSave = ref(false)
		const { loadActorsToSelect, actorsToSelect, loadingActors } = actorsState()
		const { loadCompanies, companies, loadingCompanies } = companyState()

		// Load actors and set value from movie prop
		onMounted(async () => {
			await loadActorsToSelect()
			await loadCompanies()
			innerMovie.value = new Movie({
				id: movieProp.id,
				title: movieProp.title,
				company: movieProp.company,
				poster: movieProp.poster,
				actors: movieProp.actors,
				duration: movieProp.duration,
				genre: movieProp.genre,
				imdbRating: movieProp.imdbRating,
				year: movieProp.year,
			})
		})
		// Add genre to genre movie value
		const addGenre = () => {
			if (textToAddGenre.value && !innerMovie.value.genre.includes(textToAddGenre.value)) {
				innerMovie.value.genre.push(textToAddGenre.value)
				textToAddGenre.value = ''
			}
		}
		// Delete genre from genre movie value
		const deleteGenre = (position) => {
			if (innerMovie.value.genre[position]) {
				innerMovie.value.genre.splice(position, 1)
			}
		}
		// Call movie validation
		const validateFields = () => {
			errorsForm.value = InstanciedMovie.validate(innerMovie.value)
			console.log(errorsForm.value)
		}
		// Emit movie if not errors
		const emitMovie = () => {
			validateFields()
			makeSave.value = true
			if (errorsForm.value === null) {
				emit('save', innerMovie.value)
			}
		}
		// Watch movie value to edit error of form if edit some field
		// save button is pressed
		watch(
			() => innerMovie.value,
			() => {
				if (makeSave.value) {
					validateFields()
				}
			},
			{ deep: true },
		)

		return {
			emitMovie,
			actorsToSelect,
			textToAddGenre,
			loadingActors,
			innerMovie,
			errorsForm,
			companies,
			loadingCompanies,
			addGenre,
			deleteGenre,
		}
	},
}
