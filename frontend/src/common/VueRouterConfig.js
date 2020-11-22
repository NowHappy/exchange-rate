import Vue from 'vue'
import VueRouter from 'vue-router'

const AppMain = () => import('../components/AppMain')
const ExchangeRate = () => import('../components/view/ExchangeRate.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AppMain,
            children : [
                {
                    path: '',
                    component: ExchangeRate
                }
            ]
        }
    ]
})

export default router
