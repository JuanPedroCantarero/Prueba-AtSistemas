<template>
	<div id="movie-list" class="flex flex-col w-full sm:grid sm:grid-cols-3 sm:gap-1.5">
		<router-link
			v-for="movie in movies"
			:key="`movie_${movie.id}`"
			:id="`movie_${movie.id}`"
			:to="{ name: 'detail-movie', params: { id: movie.id } }"
			@click="open = !open"
			class="flex w-ful flex-col jus p-3 bg-white border-2 border-gray-800 rounded-xl mb-2 font-sans"
		>
			<card :title="movie.title" :img-url="movie.poster" :has-img="true" :id="movie.id">
				<div class="flex flex-wrap mt-2">
					<span v-for="genre in movie.genre" class="mb-1 mr-2 text-base" :key="`${movie.id}_${genre}`">
						#{{ genre }}
					</span>
				</div>
			</card>
		</router-link>
		<div class="fixed bottom-0 right-0 p-2">
			<router-link :to="{ name: 'new-movie' }">
				<icon-button
					id="add-movie"
					:class-button="'bg-yellow-200 hover:bg-yellow-400 text-gray-900 px-3 py-1 border border-gray-700'"
				>
					<div class="text-2xl flex items-center justify-center md:w-24">
						<em class="fas fa-plus text-2xl"></em>
						<span class="hidden md:block text-base ml-2">{{ $t('actions.add') }}</span>
					</div>
				</icon-button>
			</router-link>
		</div>
	</div>
</template>
<script src="./List.js"></script>
