<template>
	<div class="w-full flex flex-col">
		<form class="pb-20 md:grid md:grid-cols-2 md:gap-1.5 md:items-center" v-if="innerMovie">
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="title"> Title </label>
				<input
					id="title"
					v-model="innerMovie.title"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					:class="[errorsForm?.title ? 'bg-red-100 border-red-500' : '']"
					type="text"
					placeholder="Hulk"
				/>
				<div class="mt-2 text-red-600 font-bold text-xs text-left pl-1" v-if="errorsForm?.title">
					{{ errorsForm.title.message }}
				</div>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="poster"> Poster </label>
				<input
					id="poster"
					v-model="innerMovie.poster"
					type="text"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					:class="[errorsForm?.poster ? 'bg-red-100 border-red-500' : '']"
					placeholder="https://......"
				/>
				<div class="mt-2 text-red-600 font-bold text-xs text-left pl-1" v-if="errorsForm?.poster">
					{{ errorsForm.poster.message }}
				</div>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="genre"> Genres </label>
				<div class="flex flex-col relative w-full">
					<div class="w-full relative">
						<input
							id="genre"
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							:class="[errorsForm?.genre ? 'bg-red-100 border-red-500' : '']"
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
					<div class="mt-2 text-red-600 font-bold text-xs text-left pl-1" v-if="errorsForm?.genre">
						{{ errorsForm.genre.message }}
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
			<div class="inline-block relative w-full mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="actors"> Actors </label>
				<multiselect
					mode="tags"
					:value="innerMovie.actors"
					:object="true"
					:class="`${errorsForm?.actors ? 'bg-red-100 border-red-500' : ''}`"
					:closeOnSelect="false"
					:options="actorsToSelect"
					label="name"
					value-prop="id"
					:loading="loadingActors"
					@input="(event) => (innerMovie.actors = event)"
				/>
				<div class="mt-2 text-red-600 font-bold text-xs text-left pl-1" v-if="errorsForm?.actors">
					{{ errorsForm.actors.message }}
				</div>
			</div>
			<div class="inline-block relative w-full mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="actors"> Company </label>
				<multiselect
					mode="single"
					:value="innerMovie.company"
					:class="`${errorsForm?.company ? 'bg-red-100 border-red-500' : ''}`"
					:object="true"
					:options="companies"
					label="name"
					value-prop="id"
					:loading="loadingCompanies"
					@input="(event) => (innerMovie.company = event)"
				/>
				<div class="mt-2 text-red-600 font-bold text-xs text-left pl-1" v-if="errorsForm?.company">
					{{ errorsForm.company.message }}
				</div>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="year"> Year </label>
				<input
					id="year"
					v-model="innerMovie.year"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					:class="[errorsForm?.year ? 'bg-red-100 border-red-500' : '']"
					type="number"
					placeholder="2000"
				/>
				<div class="mt-2 text-red-600 font-bold text-xs text-left pl-1" v-if="errorsForm?.year">
					{{ errorsForm.year.message }}
				</div>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="duration"> Duration </label>
				<div class="flex items-baseline relative justify-between w-full">
					<input
						id="duration"
						v-model="innerMovie.duration"
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						:class="[errorsForm?.duration ? 'bg-red-100 border-red-500' : '']"
						type="number"
						placeholder="300"
					/>
					<div class="h-full flex absolute items-center right-6 text-gray-400">mins</div>
				</div>
				<div class="mt-2 text-red-600 font-bold text-xs text-left pl-1" v-if="errorsForm?.duration">
					{{ errorsForm.duration.message }}
				</div>
			</div>
			<div>
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="imdbRating">
					Imdb rating <span v-if="innerMovie.imdbRating">({{ innerMovie.imdbRating }})</span>
				</label>
				<vue3-star-ratings
					v-model="innerMovie.imdbRating"
					:class="[errorsForm?.imdbRating ? 'bg-red-100 border-red-500' : '']"
					:numberOfStars="10"
					starSize="20"
					:showControl="false"
					:step="0.5"
				></vue3-star-ratings>
				<div class="mt-2 text-red-600 font-bold text-xs text-left pl-1" v-if="errorsForm?.imdbRating">
					{{ errorsForm.imdbRating.message }}
				</div>
			</div>
		</form>
		<div class="fixed bottom-0 right-0 p-2 z-10">
			<icon-button
				@click="emitMovie"
				:class-button="'bg-green-500 hover:bg-green-700 text-green-100 px-3 py-1 border border-gray-700'"
			>
				<div class="text-2xl flex items-center justify-center md:w-24">
					<em class="fas fa-save text-2xl"></em>
					<span class="hidden md:block text-base ml-2">{{ innerMovie?.id ? 'Save' : 'Create' }}</span>
				</div>
			</icon-button>
		</div>
	</div>
</template>
<script src="./Form.js"></script>
