<template>
  <div class="calendar">
    <div class="days">
      <Day />
    </div>
  </div>
</template>

<script>
import Day from "../day/Day";

export default {
  name: "Calendar",
  components: { Day },
  data: function () {
      return {
          year: new Date().getFullYear(),
          month: new Date().getMonth(),
          day: new Date().getDate(),
          months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      }
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