<template>
    <div class="events">
        <div class="event" v-for="event in events" :key="event.name">
            <div class="name">{{ event.name }}</div>
            <div class="time">
                <div class="start">Start:{{ event.start }}</div>
                <div class="end">End:{{ event.end }}</div>
            </div>
            <div class="description">{{ event.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Events',
    data: function() {
        return {
            events: {}
        }
    },
    created () {
        this.events = JSON.parse(localStorage.getItem('__calendar_events'))
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