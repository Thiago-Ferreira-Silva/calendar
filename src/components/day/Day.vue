<template>
  <div class="day" @click="createEvent">{{ day }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Day",
  computed: mapState(['creatingEvent']),
  props: {
    day: { type: Number },
    month: { type: Number },
    year: { type: Number },
  },
  methods: {
    createEvent() {
      this.$store.commit("createEvent", !this.creatingEvent);
      this.$store.commit("setDate", {
        day: this.day,
        month: this.month,
        year: this.year,
      });
    },
  },
};
</script>

<style>
.day {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  border-bottom: solid 2px #000;
  width: 80px;
  height: 80px;
}

.day:hover {
  background-color: #333;
  cursor: default;
}
</style>