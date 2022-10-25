<template>
  <div>
    
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue"

export default {
    setup(){
        const isModal = ref(false);
        const showModal = () =>{
            isModal.value = !isModal.true
        }
        const hideModal = () =>{
            isModal.value = !isModal.false
        }
        onMounted(() => console.log('mounted'));
        onUnmounted(()=> console.log('unmounted'));
    }
 };
</script>

<style>

</style>