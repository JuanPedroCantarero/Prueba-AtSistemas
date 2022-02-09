<template>
	<div id="sidebar">
		<div class="fixed inset-0 h-12 flex z-10">
			<div class="absolute flex flex-col top-0 w-screen z-20">
				<div class="flex items-center justify-between w-full border-b-4 border-gray-900 p-2 bg-white">
					<div class="flex justify-start items-center w-3/4">
						<icon-button @click="open = !open">
							<em class="fas fa-bars text-xl" />
						</icon-button>
						<span class="ml-2 truncate">{{ $t(title) }}</span>
					</div>
					<div class="flex pr-2">
						<select id="locale-select" v-model="locale">
							<option v-for="optioLng in lenguajes" :key="optioLng" :value="optioLng">
								{{ optioLng }}
							</option>
						</select>
					</div>
				</div>

				<div
					ref="content"
					:class="`transition-all fixed top-0 duration-700 bg-white border-r border-gray-400 overflow-hidden flex items-baseline justify-start h-full ${
						open ? 'max-w-xs' : 'max-w-0'
					}`"
				>
					<div class="flex flex-col w-48 p-4">
						<div class="flex items-center justify-between mb-2">
							<div class="text-center font-bold text-xl">{{ $t('menu.title') }}</div>
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
							<span>{{ $t(item.title) }}</span>
							<em class="fas fa-long-arrow-alt-right"></em>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Sidebar.js"></script>
