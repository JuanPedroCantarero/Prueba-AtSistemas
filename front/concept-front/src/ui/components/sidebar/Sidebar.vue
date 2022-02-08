<template>
	<div id="sidebar">
		<div class="fixed inset-0 h-12 flex z-40">
			<div class="absolute flex flex-col top-0 w-screen z-20">
				<div class="flex items-center justify-start w-full border-b-4 border-gray-900 p-2 bg-white">
					<icon-button @click="open = !open">
						<em class="fas fa-bars text-xl" />
					</icon-button>
					<span class="ml-2 truncate">{{ title }}</span>
				</div>

				<div
					ref="content"
					:class="`transition-all fixed top-0 duration-700 bg-white border-r border-gray-400 overflow-hidden flex items-baseline justify-start h-full ${
						open ? 'max-w-xs' : 'max-w-0'
					}`"
				>
					<div class="flex flex-col w-48 p-4">
						<div class="flex items-center justify-between mb-2">
							<div class="text-center font-bold text-xl">Menu</div>
							<icon-button @click="open = !open">
								<em class="fas fa-times"></em>
							</icon-button>
						</div>
						<router-link
							v-for="item in itemsSidebar"
							:key="`item_${item.redirect}`"
							:to="{ name: item.redirect }"
							@click="open = !open"
							class="flex w-full justify-between pb-2 pt-4 mt-2 border-b border-gray-500 text-gray-700"
						>
							<span>{{ item.title }}</span>
							<em class="fas fa-long-arrow-alt-right"></em>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Sidebar.js"></script>
