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
			title_nav: 'movies.title',
		},
	},
	{
		path: '/movies/new',
		name: 'new-movie',
		component: () => import('../../views/movies/create/Create.vue'),
		props: {
			title_nav: 'movies.new',
		},
	},
	{
		path: '/movies/:id',
		name: 'edit-movie',
		component: () => import('../../views/movies/edit/Edit.vue'),
		props: {
			title_nav: 'movies.edit',
		},
	},
	{
		path: '/movies/:id/detail',
		name: 'detail-movie',
		component: () => import('../../views/movies/detail/Detail.vue'),
		props: {
			title_nav: 'movies.detail',
		},
	},
]
