<template>
    <div class="header">
        <i class="fa fa-arrow-up fa-2x" @click="changeMonth('up')"></i>
        <i class="fa fa-arrow-down fa-2x" @click="changeMonth('down')"></i>
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
        },
        changeMonth(upOrDown) {
            if (upOrDown === 'up') {
                this.$store.commit('setMonth', this.month + 1)
            }
            if (upOrDown === 'down') {
                this.$store.commit('setMonth', this.month - 1)
            }
            if (this.month < 0) {
                this.$store.commit('setYear', this.year - 1)
                this.$store.commit('setMonth', 11)
            }
            if (this.month > 11) {
                this.$store.commit('setYear', this.year + 1)
                this.$store.commit('setMonth', 0)
            }
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