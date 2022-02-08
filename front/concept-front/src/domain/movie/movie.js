export class Movie {
	id = null
	title = ''
	poster = ''
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
}
