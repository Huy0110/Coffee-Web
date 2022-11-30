import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import RegisterPage from './components/RegisterPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: HomePage},
        {path: '/login', component: LoginPage},
        {path: '/register', component: RegisterPage}
    ]
})