<template>
	<div class="flex flex-col w-full">
		<h1 class="text-xl text-left font-semibold mb-4">{{ $t('movies.edit_movie') }}</h1>
		<form-movie v-if="!loadingMovies" :movie-prop="movie" @save="updateMovie"></form-movie>
	</div>
</template>
<script src="./Edit.js"></script>
