<template>
	<div id="create-movie" class="flex flex-col w-full">
		<h1 id="create-movie-title" class="text-xl text-left font-semibold mb-4">{{ $t('movies.create') }}</h1>
		<form-movie id="create-movie-form" @save="createMovie"></form-movie>
	</div>
</template>
<script src="./Create.js"></script>
