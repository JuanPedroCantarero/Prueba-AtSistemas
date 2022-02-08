export default [
	{
		path: '/companies',
		name: 'companies',
		component: () => import('../../views/companies/list/List.vue'),
		props: {
			title: 'Companies',
		},
	},
	{
		path: '/companies/new',
		name: 'new-company',
		component: () => import('../../views/companies/form/Form.vue'),
		props: {
			title: 'New company',
		},
	},
	{
		path: '/companies/:id',
		name: 'edit-company',
		component: () => import('../../views/companies/form/Form.vue'),
	},
]
