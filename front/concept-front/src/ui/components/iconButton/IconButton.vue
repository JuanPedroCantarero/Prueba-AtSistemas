<template>
	<button
		@click="$emit('click')"
		class="w-8 h-7 rounded-full text-gray-700 bg-transparent text-center focus:outline-none hover:bg-gray-200 transition-color duration-300 cursor-pointer"
	>
		<slot></slot>
	</button>
</template>

<script src="./IconButton.js"></script>
