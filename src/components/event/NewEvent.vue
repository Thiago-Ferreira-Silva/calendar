<template>
    <div class="newEvent">
        <input type="text" class="name" placeholder="event name" v-model="name">
        <div class="start-time">
            <label>Start: </label>
            <input type="time" class="time" v-model="start">
        </div>
        <div class="end-time">
            <label>End: </label>
            <input type="time" class="time" v-model="end">
        </div>
        <input type="text" class="description" placeholder="description" v-model="description">
        <div class="buttons">
            <button class="btn btn-primary" @click="createEvent">Create</button>
            <button class="btn btn-danger" @click="cancel">Cancel</button>
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
    },
    methods: {
        createEvent () {
            if (!this.name || !this.start || !this.end || !this.description) return

            localStorage.setItem(this.name, JSON.stringify(this.$data))

            this.$router.push('/')
            /*
            me parece uma ótima ideia deixar de usar o router e colocar 'NewEvent' e 'Events' como janelas flutuantes com v-if e props
            
            os dias do mês podem ser gerados com o v-for tendo um componente separado para eles onde devem estar esses dois
        
            mas ainda me parece complicado demais organizar o calendádio
            
            procure meios de fazer isso 
            */
        },
        cancel () {
            Object.assign(this.$data, this.$options.data())
            this.$router.push('/')
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

.name, .description {
    border: none;
    background-color: transparent;
    border-bottom: solid 2px #555;
    color: #fff;

    margin-bottom: 30px;
}

.name:focus, .description:focus {
    border-bottom: solid 3px #1e72b8 ;
}

.time {
    border: none;
    background-color: transparent;
    border-bottom: solid 2px #555;
    color: #fff;

    margin-left: 10px;
}

.time:focus {
    background-color: #262626;
}

.btn {
    margin-left: 15px;
}
</style>