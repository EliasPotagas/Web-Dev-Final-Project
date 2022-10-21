<template>
<div>

</div>
</template>

<script>
export default {
    data(){
        return {newWorkout: ""};
    },
    methods: {
        addWorkout(){
            this.$emit("on-addlist",this.newWorkout);
            this.newWorkout = "";
        }
    }

}
</script>

<style>

</style>