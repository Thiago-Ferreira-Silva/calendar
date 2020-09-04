import Vue from 'vue'
import VueRouter from 'vue-router'

import Calendar from '../components/calendar/Calendar'
import NewEvent from '../components/event/NewEvent'
import Events from '../components/event/Events'
import DayMenu from '../components/event/DayMenu'

// o router é temporário

Vue.use(VueRouter)

const routes = [
    {
        name: 'calendar',
        path: '/',
        component: Calendar
    },
    {
        name: 'newEvent',
        path: '/new-event',
        component: NewEvent
    },
    {
        name: 'events',
        path: '/events',
        component: Events
    },
    {
        name: 'dayMenu',
        path: '/menu',
        component: DayMenu
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router