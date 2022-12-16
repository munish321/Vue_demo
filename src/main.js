import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './routes'
import SideBar from '@/components/SideBar.vue'
import MainLayout from '@/components/MainLayout.vue'
import MyButton from '@/components/MyButton'
import ModelVue from '@/components/Model.vue'
import MainButton from '@/components/Button.vue'
const app=createApp(App)

app.use(router)
app.component('MyButton',MyButton)
app.component('SideBar',SideBar)
app.component('MainLayout',MainLayout)
app.component('ModelVue', ModelVue)
app.component('MainButton',MainButton)
app.mount("#app")
