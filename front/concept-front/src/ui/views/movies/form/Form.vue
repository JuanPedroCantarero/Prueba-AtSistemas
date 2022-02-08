<template>
	<div class="w-full flex flex-col">
		<h1>{{ isEdit ? 'Edit movie' : 'New movie' }}</h1>
		<form>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="title"> Title </label>
				<input
					id="title"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					v-model="movie.title"
					placeholder="Hulk"
				/>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="poster"> Poster </label>
				<input
					id="poster"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					v-model="movie.poster"
					placeholder="https://......"
				/>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="genre"> Genre </label>
				<input
					id="genre"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					v-model="movie.genre"
					placeholder="terror"
				/>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="year"> Year </label>
				<input
					id="year"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="number"
					v-model="movie.year"
					placeholder="2000"
				/>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="duration"> Duration </label>
				<div class="flex items-baseline justify-between w-full">
					<input
						id="duration"
						class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="number"
						v-model="movie.duration"
						placeholder="300"
					/>
					<span class="mr-2">mins</span>
				</div>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="imdbRating">
					Imdb rating
				</label>
				<input
					id="imdbRating"
					v-model="movie.imdbRating"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="number"
					placeholder="5"
				/>
				<span>mins</span>
			</div>
			<div class="inline-block relative w-64">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="actors"> Actors </label>
				<select
					name="actors"
					v-model="movie.actors"
					multiple
					class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
				>
					<option>Select an actor</option>
				</select>
			</div>
		</form>
	</div>
</template>
<script src="./Form.js"></script>
