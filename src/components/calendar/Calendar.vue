<template>
  <div class="calendar">
    <div class="days">
      <Day />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Day from "../day/Day";

export default {
  name: "Calendar",
  components: { Day },
  computed: mapState(['settingDefault', 'month', 'year']),
  data: function () {
      return {
          calendar_year: new Date().getFullYear(),
          calendar_month: new Date().getMonth(), //isso é realmente necessário? tente tirar ou deixar mais elegante
          day: new Date().getDate(),
      }
  },
    watch: {
        settingDefault: function(setting) {
            if(setting) {
                Object.assign(this.$data, this.$options.data())
                console.log('setting')
                this.$store.commit('setDefault', false)
            }
        },
        month: function(newMonth) {
            this.calendar_month = newMonth
        },
        year: function(newYear) {
                this.calendar_year = newYear
        },
        calendar_year: function(newYear) {
          this.$store.commit('setYear', newYear)
        },
        calendar_month: function(newMonth) {
          this.$store.commit('setMonth', newMonth)
        }
    },
  created () {
      this.$store.commit('setMonth', this.calendar_month)
      this.$store.commit('setYear', this.calendar_year)
  } //melhore isso, está muito grande e feio
};
</script>

<style scoped>
.calendar {
  background-color: #1a1a1a;
  width: 100vw;
  height: 88vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.days {
  width: 95vh;
  height: 81vh;

  display: flex;
  flex-wrap: wrap;
}
</style>