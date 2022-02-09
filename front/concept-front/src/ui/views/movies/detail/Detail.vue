<template>
	<div v-if="movie" class="flex flex-col w-full text-sm md:text-base text-gray-800">
		<div class="w-full h-60 md:h-96 flex justify-center relative">
			<img
				v-if="movie?.poster !== null"
				loading="lazy"
				:src="movie?.poster"
				:alt="`Poster of ${movie?.title}`"
				class="w-full md:w-2/5 h-full"
			/>
			<img
				v-else
				loading="lazy"
				src="http://www.dentalmayorga.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
				alt="no image"
				class="w-full md:w-2/5 h-full"
			/>
		</div>
		<div class="w-full grid grid-cols-2 gap-2 mt-2">
			<div class="flex flex-col text-left">
				<span class="font-bold">Rating</span>
				<span class="text-gray-400 text-xs md:text-sm mt-2">{{ movie?.imdbRating || '-' }}</span>
			</div>
			<div class="flex flex-col text-right">
				<span class="font-bold">Duration</span>
				<span class="text-gray-400 text-xs md:text-sm mt-2">{{
					movie?.duration ? `${movie.duration} mins` : '-'
				}}</span>
			</div>
		</div>
		<div class="flex flex-col w-full mt-4 text-left">
			<div class="font-bold">Actors</div>
			<div class="h-px w-full border-b border-gray-300 my-1"></div>
			<span
				class="text-gray-400 text-xs md:text-sm mt-1"
				v-for="actor in movie?.actors"
				:id="`actor_${actor?.id}`"
				:key="`actor_${actor?.id}`"
			>
				{{ actor.name }}
			</span>
		</div>
		<div class="flex flex-col w-full mt-4 text-left">
			<div class="font-bold">Company</div>
			<div class="h-px w-full border-b border-gray-300 my-1"></div>
			<span class="text-gray-400 text-xs md:text-sm mt-1">
				{{ movie?.company ? movie.company.name : '-' }}
			</span>
		</div>
		<div class="flex flex-col w-full mt-4 text-left">
			<div class="font-bold">Genres</div>
			<div class="h-px w-full border-b border-gray-300 my-2"></div>
			<div class="flex flex-wrap w-full">
				<span
					class="text-gray-600 font-bold text-xs md:text-sm mt-1 mr-4"
					v-for="(genr, i) in movie?.genre"
					:id="`genre_${i}`"
					:key="`genre_${i}`"
				>
					#{{ genr }}
				</span>
			</div>
		</div>
		<div class="fixed bottom-0 right-0 p-2 z-10">
			<div class="flex">
				<router-link :to="{ name: 'edit-movie', params: { id: +movie.id } }" class="mr-2">
					<icon-button
						:class-button="'bg-green-500 hover:bg-green-700 text-green-100 px-3 py-2 border border-gray-700'"
					>
						<div class="text-2xl flex items-center md:w-24 justify-center">
							<em class="fas fa-pencil text-2xl"></em>
							<span class="hidden md:block text-base ml-2">Edit</span>
						</div>
					</icon-button>
				</router-link>
				<icon-button
					@click="showModal = true"
					:class-button="'bg-red-500 hover:bg-red-700 text-red-100 px-3 py-2 border border-gray-700'"
				>
					<div class="text-2xl flex items-center md:w-24">
						<em class="fas fa-trash text-2xl"></em>
						<span class="hidden md:block text-base ml-2">Remove</span>
					</div>
				</icon-button>
			</div>
		</div>
		<modal :title="'Delete movie'" v-if="showModal" @close="deleteMovieById">
			<div class="flex text-left text-sm md:text-base">
				Are you sure you wants to delete movie {{ movie?.title }}?
			</div>
		</modal>
	</div>
</template>
<script src="./Detail.js"></script>
