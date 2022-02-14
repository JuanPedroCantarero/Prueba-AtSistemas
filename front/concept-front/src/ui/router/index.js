import { createRouter, createWebHashHistory } from 'vue-router'
import actors from './actors'
import companies from './companies'
import movies from './movies'
import titleState from '../../application/states/titleState'

const routes = [...movies, ...companies, ...actors]
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const { setTitle } = titleState()

router.beforeEach((to, from, next) => {
	if (to?.matched[0]?.props?.default?.title) {
		setTitle(to.matched[0].props.default.title)
	}
	return next()
})

export default router
