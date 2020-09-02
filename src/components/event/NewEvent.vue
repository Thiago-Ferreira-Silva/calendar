<template>
    <div class="newEvent">
        
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
}
</style>