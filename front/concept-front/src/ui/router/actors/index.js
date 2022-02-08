export default [
	{
		path: '/actors',
		name: 'actors',
		component: () => import('../../views/actors/list/List.vue'),
		props: {
			title: 'Actors',
		},
	},
	{
		path: '/actors/new',
		name: 'new-actors',
		component: () => import('../../views/actors/form/Form.vue'),
		props: {
			title: 'New actor',
		},
	},
	{
		path: '/actors/:id',
		name: 'edit-actors',
		component: () => import('../../views/companies/form/Form.vue'),
	},
]
