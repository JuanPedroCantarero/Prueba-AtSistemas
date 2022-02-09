import { TYPES_TO_VALIDATE } from '../../utils/const/TypesToValidate'
import Validator from 'fastest-validator'

export class Movie {
	id = null
	title = null
	poster = null
	genre = []
	company = null
	year = null
	duration = null
	imdbRating = null
	actors = []

	constructor({ id, title, poster, genre, year, duration, company, imdbRating, actors }) {
		this.id = id ? id : this.id
		this.title = title ? title : this.title
		this.poster = poster ? poster : this.poster
		this.company = company ? company : this.company
		this.genre = genre ? genre : this.genre
		this.year = year ? year : this.year
		this.duration = duration ? duration : this.duration
		this.imdbRating = imdbRating ? imdbRating : this.imdbRating
		this.actors = actors ? actors : this.actors
	}
	// Schema to make validation of movies
	schema = () => ({
		title: { type: TYPES_TO_VALIDATE.STRING, empty: false },
		poster: { type: TYPES_TO_VALIDATE.URL },
		genre: { type: TYPES_TO_VALIDATE.ARRAY, items: TYPES_TO_VALIDATE.STRING, min: 1 },
		year: { type: TYPES_TO_VALIDATE.NUMBER },
		company: { type: TYPES_TO_VALIDATE.OBJECT, props: { id: { type: TYPES_TO_VALIDATE.NUMBER } } },
		duration: { type: TYPES_TO_VALIDATE.NUMBER },
		imdbRating: { type: TYPES_TO_VALIDATE.NUMBER },
		actors: { type: TYPES_TO_VALIDATE.ARRAY, items: TYPES_TO_VALIDATE.NUMBER, min: 1 },
	})
	// Payload to send services
	payloadItem = () => ({
		id: this.id,
		title: this.title,
		poster: this.poster,
		genre: this.genre,
		year: this.year ? +this.year : this.year,
		duration: this.duration ? +this.duration : this.duration,
		imdbRating: this.imdbRating ? +this.imdbRating : this.imdbRating,
		actors: this.actors ? this.actors.map((actor) => actor.id) : [],
	})
	// Payload to validate
	validationItem = () => ({
		id: this.id,
		title: this.title,
		poster: this.poster,
		company: this.company,
		genre: this.genre,
		year: this.year ? +this.year : this.year,
		duration: this.duration ? +this.duration : this.duration,
		imdbRating: this.imdbRating ? +this.imdbRating : this.imdbRating,
		actors: this.actors ? this.actors.map((actor) => actor.id) : [],
	})
	// Validation function to make validation of Movie
	// returns an object with fields with error or null if not error
	validate = (movie) => {
		const v = new Validator()
		const check = v.compile(this.schema())
		const resultValidation = check(movie.validationItem())
		if (resultValidation === true) {
			return null
		}
		return resultValidation.reduce((value, { field, ...params }) => ({ ...value, [field]: params }), {})
	}
}

export const InstanciedMovie = new Movie({})
