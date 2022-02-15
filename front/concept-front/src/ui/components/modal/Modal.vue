<template>
	<div class="flex fixed top-0 h-screen w-screen inset-0 justify-center items-center flex-grow z-40">
		<div class="bg-gray-300 opacity-50 w-full h-full absolute inset-0"></div>
		<div class="flex flex-col bg-white w-3/4 h-1/4 text-left z-50">
			<div class="text-lg font-bold p-2 pb-4 border-b border-gray-300">{{ $t(title) }}</div>
			<div class="w-full p-4 m-auto">
				<slot></slot>
			</div>
			<div class="flex justify-end p-2 pt-4 border-t border-gray-300 mt-auto">
				<button
					id="close-modal"
					@click="$emit('close', false)"
					class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
				>
					{{ $t('actions.cancel') }}
				</button>
				<button
					id="accept-modal"
					@click="$emit('close', true)"
					class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded ml-2"
				>
					{{ $t('actions.accept') }}
				</button>
			</div>
		</div>
	</div>
</template>
<script src="./Modal.js"></script>
