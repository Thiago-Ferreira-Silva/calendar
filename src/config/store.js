import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        month: null,
        year: null,
        date: null,
        settingDefault: false,
        creatingEvent: false
    },
    mutations: {
        setMonth (state, month) {
            state.month = month
        },
        setYear (state, year) {
            state.year = year
        },
        setDate (state , date) {
            state.date = date
        },
        setDefault (state, settingDefault) {
            state.settingDefault = settingDefault
        },
        createEvent (state, creatingEvent) {
            state.creatingEvent = creatingEvent
        }
    }
})