<template>
	<button
		@click="$emit('click')"
		:class="`rounded-full focus:outline-none text-center transition-color duration-300 cursor-pointer ${classButton}`"
	>
		<slot></slot>
	</button>
</template>

<script src="./IconButton.js"></script>
