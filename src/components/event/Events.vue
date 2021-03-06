<template>
  <div class="events">
    <div class="date">{{ date.day }}/{{ date.month + 1 }}</div>
    <ul>
    <div class="event" v-for="event in events" :key="event.name + Math.random()">
      <div class="name">{{ event.name }}</div>
      <div class="time">
        <div class="start">Start:{{ event.start }}</div>
        <div class="end">End:{{ event.end }}</div>
      </div>
      <div class="description">{{ event.description }}</div>
    </div>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Events",
  computed: mapState(["date", "updateEvents"]),
  data: function () {
    return {
      events: [],
    };
  },
  watch: {
    date: function (newDate) {
      if (newDate) {
        this.events = JSON.parse(
          localStorage.getItem(`__calendar_events_${JSON.stringify(this.date)}`)
        );
      }
    },
    updateEvents: function (update) {
      if (update) {
        this.events = JSON.parse(
          localStorage.getItem(`__calendar_events_${JSON.stringify(this.date)}`)
        );
        this.$store.commit('setUpdateEvents', false)
      }
    }
  },
  created() {
    this.events = JSON.parse(
          localStorage.getItem(`__calendar_events_${JSON.stringify(this.date)}`))
  }
};
</script>

<style>
.events {
  align-self: start;

  width: 400px;
  margin: 15px;
  background-color: #1a1a1a;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.events ul {
  max-height: 76vh;

  overflow-y: auto;
}

.event {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #262626;
  margin-bottom: 30px;
  padding: 10px;
}

.time {
  margin: 15px 0;
  display: flex;
}

.start {
  margin-right: 20px;
}
</style>