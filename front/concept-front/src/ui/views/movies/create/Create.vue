<template>
	<div class="flex flex-col w-full">
		<h1 class="text-xl text-left font-semibold mb-4">Create movie</h1>
		<form-movie @save="createMovie"></form-movie>
	</div>
</template>
<script src="./Create.js"></script>
