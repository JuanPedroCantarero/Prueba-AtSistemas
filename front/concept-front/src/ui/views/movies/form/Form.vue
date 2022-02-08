<template>
	<div class="w-full flex flex-col">
		<form class="pb-20 md:grid md:grid-cols-2 md:gap-1.5" v-if="innerMovie">
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="title"> Title </label>
				<input
					id="title"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					v-model="innerMovie.title"
					placeholder="Hulk"
				/>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="poster"> Poster </label>
				<input
					id="poster"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					v-model="innerMovie.poster"
					placeholder="https://......"
				/>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="genre"> Genre </label>
				<div class="flex flex-col relative w-full">
					<div class="w-full relative">
						<input
							id="genre"
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							@keyup.enter="addGenre()"
							v-model="textToAddGenre"
							placeholder="terror"
						/>
						<div class="absolute right-4 top-1">
							<icon-button @click="addGenre()">
								<em class="fas fa-plus relative text-xl"></em>
							</icon-button>
						</div>
					</div>
					<div class="flex flex-wrap w-full p-1" v-if="innerMovie.genre.length > 0">
						<div
							v-for="(genre, i) in innerMovie.genre"
							:key="`genre_${i}`"
							:id="`genre_${i}`"
							class="flex justify-between items-center rounded-2xl px-2 py-1 m-1 bg-gray-200 border border-gray-500"
						>
							<span class="font-semibold text-xs">{{ genre }}</span>
							<em
								class="text-xs fas fa-times p-1 px-2 cursor-pointer ml-2 rounded-full hover:bg-gray-300"
								@click="deleteGenre(i)"
							></em>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="year"> Year </label>
				<input
					id="year"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="number"
					v-model="innerMovie.year"
					placeholder="2000"
				/>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="duration"> Duration </label>
				<div class="flex items-baseline relative justify-between w-full">
					<input
						id="duration"
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="number"
						v-model="innerMovie.duration"
						placeholder="300"
					/>
					<div class="h-full flex absolute items-center right-6 text-gray-400">mins</div>
				</div>
			</div>
			<div class="inline-block relative w-full mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="actors"> Actors </label>
				<multiselect
					mode="tags"
					:closeOnSelect="false"
					:value="innerMovie.actors"
					@input="(event) => (innerMovie.actors = event)"
					:options="actorsToSelect"
					label="name"
					value-prop="id"
					:loading="loadingActors"
				/>
			</div>
			<div>
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="imdbRating">
					Imdb rating <span v-if="innerMovie.imdbRating">({{ innerMovie.imdbRating }})</span>
				</label>
				<vue3-star-ratings
					v-model="innerMovie.imdbRating"
					:numberOfStars="10"
					starSize="20"
					:showControl="false"
					:step="0.5"
				></vue3-star-ratings>
			</div>
		</form>
		<div class="fixed bottom-0 right-0 p-2 z-10">
			<icon-button
				@click="emitMovie"
				:class-button="'bg-green-500 hover:bg-green-700 text-green-100 px-3 py-1 border border-gray-700'"
			>
				<em class="fas fa-save text-2xl"></em>
			</icon-button>
		</div>
	</div>
</template>
<script src="./Form.js"></script>
