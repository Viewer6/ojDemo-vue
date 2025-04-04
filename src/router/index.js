import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/oj/login', 
            name: 'login', 
            component: () => import('../views/Login.vue')
        }
    ]
})

export default router
