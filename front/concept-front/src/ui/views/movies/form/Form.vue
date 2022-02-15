<template>
	<div class="w-full flex flex-col" v-if="innerMovie">
		<form class="pb-20 md:grid md:grid-cols-2 md:gap-1.5 md:items-center">
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="title">
					{{ $t('movies.form.title') }}
				</label>
				<input
					id="title"
					v-model="innerMovie.title"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					:class="[errorsForm?.title ? 'bg-red-100 border-red-500' : '']"
					type="text"
					placeholder="Hulk"
				/>
				<div
					id="error-title"
					class="mt-2 text-red-600 font-bold text-xs text-left pl-1"
					v-if="errorsForm?.title"
				>
					{{ $t(`error.${errorsForm.title.type}`, { field: $t('error.fields.title') }) }}
				</div>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="poster">
					{{ $t('movies.form.poster') }}
				</label>
				<input
					id="poster"
					v-model="innerMovie.poster"
					type="text"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					:class="[errorsForm?.poster ? 'bg-red-100 border-red-500' : '']"
					placeholder="https://......"
				/>
				<div
					id="error-poster"
					class="mt-2 text-red-600 font-bold text-xs text-left pl-1"
					v-if="errorsForm?.poster"
				>
					{{ $t(`error.${errorsForm.poster.type}`, { field: $t('error.fields.poster') }) }}
				</div>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="genre">
					{{ $t('movies.form.genres') }}
				</label>
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
							<icon-button id="add-genre" @click="addGenre()">
								<em class="fas fa-plus relative text-xl"></em>
							</icon-button>
						</div>
					</div>
					<div
						id="error-genres"
						class="mt-2 text-red-600 font-bold text-xs text-left pl-1"
						v-if="errorsForm?.genre"
					>
						{{ $t(`error.${errorsForm.genre.type}`, { field: $t('error.fields.genre') }) }}
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
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="actors">
					{{ $t('movies.form.actors') }}
				</label>
				<multiselect
					id="actors"
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
				<div
					id="error-actors"
					class="mt-2 text-red-600 font-bold text-xs text-left pl-1"
					v-if="errorsForm?.actors"
				>
					{{ $t(`error.${errorsForm.actors.type}`, { field: $t('error.fields.actors') }) }}
				</div>
			</div>
			<div class="inline-block relative w-full mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="actors">
					{{ $t('movies.form.company') }}
				</label>
				<multiselect
					id="company"
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
				<div
					id="error-company"
					class="mt-2 text-red-600 font-bold text-xs text-left pl-1"
					v-if="errorsForm?.company"
				>
					{{ $t(`error.${errorsForm.company.type}`, { field: $t('error.fields.company') }) }}
				</div>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="year">
					{{ $t('movies.form.year') }}
				</label>
				<input
					id="year"
					v-model="innerMovie.year"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					:class="[errorsForm?.year ? 'bg-red-100 border-red-500' : '']"
					type="number"
					placeholder="2000"
				/>
				<div id="error-year" class="mt-2 text-red-600 font-bold text-xs text-left pl-1" v-if="errorsForm?.year">
					{{ $t(`error.${errorsForm.year.type}`, { field: $t('error.fields.year') }) }}
				</div>
			</div>
			<div class="mb-4">
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="duration">
					{{ $t('movies.form.duration') }}
				</label>
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
				<div
					id="error-duration"
					class="mt-2 text-red-600 font-bold text-xs text-left pl-1"
					v-if="errorsForm?.duration"
				>
					{{ $t(`error.${errorsForm.duration.type}`, { field: $t('error.fields.duration') }) }}
				</div>
			</div>
			<div>
				<label class="text-left block text-gray-700 text-sm font-bold mb-2" for="imdbRating">
					{{ $t('movies.form.imdbRating')
					}}<span v-if="innerMovie.imdbRating">({{ innerMovie.imdbRating }})</span>
				</label>
				<vue3-star-ratings
					v-model="innerMovie.imdbRating"
					id="imdbRating"
					:class="[errorsForm?.imdbRating ? 'bg-red-100 border-red-500' : '']"
					:numberOfStars="10"
					starSize="20"
					:showControl="false"
					:step="0.5"
				></vue3-star-ratings>
				<div
					id="error-imdbRating"
					class="mt-2 text-red-600 font-bold text-xs text-left pl-1"
					v-if="errorsForm?.imdbRating"
				>
					{{ $t(`error.${errorsForm.imdbRating.type}`, { field: $t('error.fields.imdbRating') }) }}
				</div>
			</div>
		</form>
		<div class="fixed bottom-0 right-0 p-2 z-10">
			<icon-button
				id="submit-movie"
				@click="emitMovie"
				:class-button="'bg-green-500 hover:bg-green-700 text-green-100 px-3 py-1 border border-gray-700'"
			>
				<div class="text-2xl flex items-center justify-center md:w-24">
					<em class="fas fa-save text-2xl"></em>
					<span class="hidden md:block text-base ml-2">{{
						$t(innerMovie?.id ? 'actions.save' : 'actions.create')
					}}</span>
				</div>
			</icon-button>
		</div>
	</div>
</template>
<script src="./Form.js"></script>
