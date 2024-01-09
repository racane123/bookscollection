import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Books from './components/Books.vue'


const routes = [
    {path:'/', component: Home, name:'Home'},
    {path:'/about', component:About, name:'About'},
    {path:'/contact', component:Contact, name:'Contact'},
    {path:'/books', component:Books, name:'Books'}
]

const router = createRouter ({
    history:createWebHistory(),
    routes,

})

export default router