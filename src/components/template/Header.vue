<template>
    <div class="header">
        <i class="fa fa-arrow-up fa-2x"></i>
        <i class="fa fa-arrow-down fa-2x"></i>
        <div class="date">mês e ano</div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
.header {
    background-color: #262626;
    height: 12vh;

    display: flex;
}

i {
    height: 12vh;
    width: 12vh;
    color: #aaa;

    display: flex;
    justify-content: center;
    align-items: center;
}

i:hover {
    background-color: #1e72b8;
    color: #fff;
}

i:active {
    background-color: #0168ad;
}

.date {
    display: flex;
    align-items: center;

    margin-left: 25vw;

    font-size: 2rem;
    color: #136db3;
}
</style>