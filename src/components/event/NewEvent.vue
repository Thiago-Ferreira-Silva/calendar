<template>
  <div class="newEvent">
    <input type="text" class="name" placeholder="event name" v-model="name" />
    <div class="start-time">
      <label>Start:</label>
      <input type="time" class="time" v-model="start" />
    </div>
    <div class="end-time">
      <label>End:</label>
      <input type="time" class="time" v-model="end" />
    </div>
    <input type="text" class="description" placeholder="description" v-model="description" />
    <div class="buttons">
      <button class="btn btn-primary" @click="createEvent">Create</button>
      <button class="btn btn-danger" @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NewEvent",
  computed: mapState(["date"]),
  data: function () {
    return {
      name: null,
      start: null,
      end: null,
      description: null,
    };
  },
  methods: {
    createEvent() {
      if (!this.name || !this.start || !this.end || !this.description) return;

      const eventsString = localStorage.getItem(
        `__calendar_events_${JSON.stringify(this.date)}`
      );
      let events = [];

      if (eventsString) {
        events = JSON.parse(eventsString);
      }
      events.push(this.$data);

      localStorage.setItem(
        `__calendar_events_${JSON.stringify(this.date)}`,
        JSON.stringify(events)
      );

      this.$store.commit('setUpdateEvents', true)

      Object.assign(this.$data, this.$options.data());

    },
    cancel() {
      Object.assign(this.$data, this.$options.data());
    },
  },
};
</script>

<style scoped>
.newEvent {
  background-color: #1a1a1a;

  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.name,
.description {
  border: none;
  background-color: transparent;
  border-bottom: solid 2px #555;
  color: #fff;

  margin-bottom: 30px;
}

.name:focus,
.description:focus {
  border-bottom: solid 3px #1e72b8;
}

.time {
  border: none;
  background-color: transparent;
  border-bottom: solid 2px #555;
  color: #fff;

  margin-left: 10px;
}

.time:focus {
  background-color: #262626;
}

.btn {
  margin-left: 15px;
}
</style>