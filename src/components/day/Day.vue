<template>
  <div class="day" :class="{ selected }" @click="setSelected">{{ day }}</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Day",
  computed: mapState(["date"]),
  props: {
    day: { type: Number },
    month: { type: Number },
    year: { type: Number },
  },
  data: function () {
    return {
      selected: false
    }
  },
  methods: {
    setSelected() {
      this.$store.commit("setDate", {
        day: this.day,
        month: this.month,
        year: this.year,
      });
    },
  },
  watch: {
    date: function (newDate) {
      if (this.day === newDate.day && this.month === newDate.month && this.year === newDate.year) {
        this.selected = true
      } else {
        this.selected = false
      }
    }
  },
  created() {
    if (this.day === this.date.day && this.month === this.date.month && this.year === this.date.year) {
        this.selected = true
      }
  }
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

.selected {
  background-color: #55f;
}

.selected:hover {
  background-color: #88f;
}
</style>