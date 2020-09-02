<template>
    <div class="calendar">
        <router-link to="/new-event">New Event</router-link>
    </div>
</template>

<script>
export default {
    name: 'Calendar'
}
</script>

<style scoped>

.calendar {
    background-color: #1a1a1a;
    width: 100vw;
    height: 88vh;
}
</style>