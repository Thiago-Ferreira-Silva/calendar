import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        month: null,
        year: null,
        settingDefault: false
    },
    mutations: {
        setMonth (state, month) {
            state.month = month
        },
        setYear (state, year) {
            state.year = year
        },
        setDefault (state, settingDefault) {
            state.settingDefault = settingDefault
        }
    }
})