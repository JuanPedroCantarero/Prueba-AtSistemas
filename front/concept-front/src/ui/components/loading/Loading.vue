<template>
	<div
		class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-200 opacity-50 flex flex-col items-center justify-center"
	>
		<div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-300 h-12 w-12 mb-4"></div>
		<h2 class="text-center text-gray-600 text-xl font-semibold">{{ $t('loading.title') }}</h2>
		<p class="w-1/3 text-center text-gray-600">{{ $t('loading.body') }}</p>
	</div>
</template>
<style scoped>
.loader {
	border-top-color: rgb(87, 84, 84);
	-webkit-animation: spinner 1.5s linear infinite;
	animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
