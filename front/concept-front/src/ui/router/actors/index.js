export default [
	{
		path: '/actors',
		name: 'actors',
		component: () => import('../../views/actors/list/List.vue'),
		props: {
			title: 'Actors',
		},
	},
]
