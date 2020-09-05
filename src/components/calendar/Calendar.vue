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
  computed: mapState(['settingDefault']),
  data: function () {
      return {
          year: new Date().getFullYear(),
          month: new Date().getMonth(),
          day: new Date().getDate(),
      }
  },
  watch() {
      settingDefault: function(setting) {
          if (setting === true) {
              Object.assign(this.$data, this.$options.data())
              this.$store.commit('setDefault', false)
              console.log(setting)
          }
      }
  },
  created () {
      this.$store.commit('setMonth', this.month)
      this.$store.commit('setYear', this.year)
  }
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