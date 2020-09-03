<template>
    <div class="events">
        <div class="event" v-for="event in events" :key="event.name">
            <div class="name">{{ event.name }}</div>
            <div class="start">{{ event.start }}</div>
            <div class="end">{{ event.end }}</div>
            <div class="description">{{ event.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Events',
    data: function() {
        return {
            events: []
        }
    },
    created () {
        //temporário
        this.events[0] = JSON.parse(localStorage.getItem('Evento'))
        this.events[1] = JSON.parse(localStorage.getItem('Criando um evento'))
    }
}
</script>

<style>
.events {
    height: 88vh;
    width: 100vw;
    background-color: #1a1a1a;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>