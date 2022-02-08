export default [
	{
		path: '/companies',
		name: 'companies',
		component: () => import('../../views/companies/list/List.vue'),
		props: {
			title: 'Companies',
		},
	},
]
