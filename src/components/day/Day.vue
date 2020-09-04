<template>
    <div class="day">
        teste
    </div>
</template>

<script>
export default {
    name: 'Day'
}
</script>

<style>
    .day {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        border-bottom: solid 2px #000;
        margin: 0;
        width: 13vh;
        height: 13vh;
    }

    .day:hover {
        background-color: #333;
        cursor: default;
    }
</style>