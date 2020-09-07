<template>
  <div class="calendar">
    <Events />
    <div class="month">
      <div class="week">
        <div class="day-of-week">S</div>
        <div class="day-of-week">M</div>
        <div class="day-of-week">T</div>
        <div class="day-of-week">W</div>
        <div class="day-of-week">T</div>
        <div class="day-of-week">F</div>
        <div class="day-of-week">S</div>
      </div>
      <div class="days">
        <Day v-for="n in months[month]" :key="n" :year="year" :month="month" :day="n" />
      </div>
    </div>
    <NewEvent />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Day from "../day/Day";
import Events from '../event/Events'
import NewEvent from '../event/NewEvent'

export default {
  name: "Calendar",
  components: { Day, Events, NewEvent },
  computed: mapState(['settingDefault', 'month', 'year']),
  data: function () {
      return {
          calendar_year: new Date().getFullYear(),
          calendar_month: new Date().getMonth(), //isso é realmente necessário? tente tirar ou deixar mais elegante
          day: new Date().getDate(),
          months: [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      }
  },
    watch: {
        settingDefault: function(setting) {
            if(setting) {
                Object.assign(this.$data, this.$options.data())
                this.$store.commit('setDefault', false)
            }
        },
        month: function(newMonth) {
            this.calendar_month = newMonth
        },
        year: function(newYear) {
                this.calendar_year = newYear
                if ( ( newYear % 4 == 0 && newYear % 100 != 0 ) || (newYear % 400 == 0) ) {
                  this.months[1] = 29
                } else {
                  this.months[1] = 28
                }
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
      // quase lá, mas ainda precisa de adaptações
      if ( ( this.year % 4 == 0 && this.year % 100 != 0 ) || (this.year % 400 == 0) ) {
        this.months[1] = 29
      } else {
        this.months[1] = 28
      }
  } //melhore isso, está muito grande e feio
};
</script>

<style scoped>
.calendar {
  background-color: #1a1a1a;
  min-height: 88vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.days {
  width: 95vh;
  height: 81vh;

  display: grid;
  grid-template-columns: repeat(7, 80px);
  grid-template-rows: repeat(5, 80px);
}

.week {
  width: 100%;
  margin: 15px 0 30px 0;

  display: flex;
}

.day-of-week {
  margin: 0 35px;
}
</style>