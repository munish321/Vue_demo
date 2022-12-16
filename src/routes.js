import {createWebHistory, createRouter} from "vue-router"
import SignUp from "./components/SignUp.vue"
import DashBoard from '@/components/Dashboard.vue'
import ContactPage from '@/components/Contact.vue'
import SummaryPage from '@/components/Summary.vue'
const routes=[
 
    {
        name:'Sign Up',
        path:'/',
        component:SignUp
    },
   
    {
        name:'Dashboard',
        path:'/dashboard',
        component:DashBoard
    },
    
    {
        name:'Contact',
        path:'/contact',
        component:ContactPage
    },
    {
        name:'Summary',
        path:'/summary',
        component:SummaryPage
    },
   
   
];

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;