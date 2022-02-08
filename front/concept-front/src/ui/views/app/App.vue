<template>
	<div>
		<div id="main">
			<sidebar></sidebar>
			<div class="flex p-4 pt-14">
				<router-view />
				<Loading v-if="loading" />
			</div>
		</div>
	</div>
</template>
<script src="./App.js"></script>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
