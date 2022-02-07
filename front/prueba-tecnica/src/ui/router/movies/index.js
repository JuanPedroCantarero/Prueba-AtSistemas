export default [
	{
		path: '/',
		redirect: '/movies',
	},
	{
		path: '/movies',
		name: 'movies',
		component: () => import('../../views/movies/list/List.vue'),
		props: {
			title: 'Movies',
		},
	},
	{
		path: '/movies/new',
		name: 'new-movie',
		component: () => import('../../views/movies/form/Form.vue'),
		props: {
			title: 'New movie',
		},
	},
	{
		path: '/movies/:id',
		name: 'edit-movie',
		component: () => import('../../views/movies/form/Form.vue'),
	},
]
