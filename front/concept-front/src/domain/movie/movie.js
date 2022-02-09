import { TYPES_TO_VALIDATE } from '../../utils/const/TypesToValidate'
import Validator from 'fastest-validator'
export class Movie {
	id = null
	title = null
	poster = null
	genre = []
	year = null
	duration = null
	imdbRating = null
	actors = []

	constructor({ id, title, poster, genre, year, duration, imdbRating, actors }) {
		this.id = id ? id : this.id
		this.title = title ? title : this.title
		this.poster = poster ? poster : this.poster
		this.genre = genre ? genre : this.genre
		this.year = year ? year : this.year
		this.duration = duration ? duration : this.duration
		this.imdbRating = imdbRating ? imdbRating : this.imdbRating
		this.actors = actors ? actors : this.actors
	}

	schema = () => ({
		title: { type: TYPES_TO_VALIDATE.STRING, empty: false },
		poster: { type: TYPES_TO_VALIDATE.URL },
		genre: { type: TYPES_TO_VALIDATE.ARRAY, items: TYPES_TO_VALIDATE.STRING, min: 1 },
		year: { type: TYPES_TO_VALIDATE.NUMBER },
		duration: { type: TYPES_TO_VALIDATE.NUMBER },
		imdbRating: { type: TYPES_TO_VALIDATE.NUMBER },
		actors: { type: TYPES_TO_VALIDATE.ARRAY, items: TYPES_TO_VALIDATE.NUMBER, min: 1 },
	})

	payloadItem = () => ({
		id: this.id,
		title: this.title,
		poster: this.poster,
		genre: this.genre,
		year: this.year ? +this.year : this.year,
		duration: this.duration ? +this.duration : this.duration,
		imdbRating: this.imdbRating ? +this.imdbRating : this.imdbRating,
		actors: this.actors,
	})

	validate = (movie) => {
		const v = new Validator()
		const check = v.compile(this.schema())
		const resultValidation = check(movie.payloadItem())
		if (resultValidation === true) {
			return null
		}
		return resultValidation.reduce((value, { field, ...params }) => ({ ...value, [field]: params }), {})
	}
}

export const InstanciedMovie = new Movie({})
