<template>
	<div class="flex flex-col w-full">
		<h1 class="text-xl text-left font-semibold mb-4">{{ $t('movies.create') }}</h1>
		<form-movie @save="createMovie"></form-movie>
	</div>
</template>
<script src="./Create.js"></script>
