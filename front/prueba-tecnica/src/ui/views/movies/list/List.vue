<template>
	<div class="flex flex-col w-full">
		<router-link
			v-for="movie in state.movies"
			:key="`movie_${movie.id}`"
			:id="`movie_${movie.id}`"
			:to="{ name: 'edit-movie', params: { id: movie.id } }"
			@click="open = !open"
			class="flex w-ful flex-col"
		>
			<span :id="movie.title">{{ movie.title }}</span>
		</router-link>
	</div>
</template>
<script src="./List.js"></script>
