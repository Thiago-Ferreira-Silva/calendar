<template>
    <div class="header">
        <i class="fa fa-arrow-up fa-2x"></i>
        <i class="fa fa-arrow-down fa-2x"></i>
        <div class="title" @click="defaultDate">
            <div>{{ months[month] }}</div>
            <div class="year">{{ year }}</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Header',
    computed: mapState(['month', 'year']),
    data: function () {
        return {
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }
    },
    methods: {
        defaultDate() {
            this.$store.commit('setDefault', true)
        }
    }
}
</script>

<style scoped>
.header {
    background-color: #262626;
    margin-bottom: solid 2px #000;
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

.title {
    display: flex;
    align-items: center;

    margin-left: 25vw;

    font-size: 2rem;
    color: #136db3;
}

.title:hover {
    cursor: pointer;
}

.year {
    margin-left: 5vw;
}
</style>