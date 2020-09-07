<template>
    <div class="day-menu">
        {{ date }}
        <router-link to="/events">Events</router-link>
        <br>
        <router-link to="/new-event">New event</router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'DayMenu',
    computed: mapState(['date'])
}
</script>

<style>

.day-menu {
    background-color: #1a1a1a;

    height: 88vh;
}

</style>