import { createRouter, createWebHashHistory } from 'vue-router'
import actors from './actors'
import companies from './companies'
import movies from './movies'
const routes = [...movies, ...companies, ...actors]
import titleState from '../../states/titleState'

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const { setTitle } = titleState()

router.beforeEach((to) => {
	if (to?.matched[0]?.props?.default?.title) {
		setTitle(to.matched[0].props.default.title)
	}
})

export default router
