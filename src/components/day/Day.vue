<template>
    <div class="day" @click="goToMenu">
        teste
    </div>
</template>

<script>
export default {
    name: 'Day',
    methods: {
        goToMenu() {
            this.$router.push('/menu')
        }
    }
    //dê um jeito de colocar as datas e organizar os meses
}
</script>

<style>
    .day {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        border-bottom: solid 2px #000;
        width: 13vh;
        height: 13vh;
    }

    .day:hover {
        background-color: #333;
        cursor: default;
    }
</style>