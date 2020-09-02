<template>
    <div class="newEvent">
        <input type="text" class="name" placeholder="event name" v-model="name">
        <div class="start-time">
            <label>Start</label>
            <input type="time" class="time" v-model="start">
        </div>
        <div class="end-time">
            <label>End</label>
            <input type="time" class="time" v-model="end">
        </div>
        <input type="text" class="description" placeholder="description" v-model="description">
        <div class="buttons">
            <button class="btn btn-primary">Create</button>
            <button class="btn btn-danger">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewEvent',
    data: function() {
        return {
            name: null,
            start: null,
            end: null,
            description: null
        }
    }
}
</script>

<style>
.newEvent {
    background-color: #1a1a1a;

    height: 88vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>