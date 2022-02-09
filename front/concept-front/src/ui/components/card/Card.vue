<template>
	<div class="flex flex-col">
		<span :id="id" class="text-left mb-2 text-lg font-bold truncate" :title="title">{{ title }}</span>
		<div class="w-full h-80 relative" v-if="hasImg">
			<img
				v-if="imgUrl !== null"
				loading="lazy"
				:src="imgUrl"
				:alt="`Poster of ${title}`"
				class="w-full h-full"
			/>
			<img
				v-else
				loading="lazy"
				src="http://www.dentalmayorga.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
				alt="no image"
				class="w-full h-full"
			/>
		</div>

		<slot></slot>
	</div>
</template>
<script src="./Card.js"></script>
