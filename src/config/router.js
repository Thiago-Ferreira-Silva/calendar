import Vue from 'vue'
import VueRouter from 'vue-router'

import Calendar from '../components/calendar/Calendar'
import NewEvent from '../components/event/NewEvent'
import Events from '../components/event/Events'

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
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router