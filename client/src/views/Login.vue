<script setup lang="ts">
    import { login } from '../scripts/session';
    import { ref } from 'vue';
    const firstName = ref('');
    const lastName = ref('');
    const password = ref('')
    const email = ref('')

</script>

<template>
    <div>
        <form class="box" @submit.prevent="login(firstName,lastName,password,false,email)">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                <input class="input" type="text" placeholder="First Name" v-model="firstName">
                </div>
            </div>

            <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                <input class="input" type="text" placeholder="Last Name" v-model="lastName">
                </div>
            </div>

            
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                <input class="input" type="email" placeholder="e.g. alex@example.com" v-model="email">
                </div>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="password">
                </div>
            </div>

            <button class="button is-primary">Sign in</button>
        </form>


    </div>
</template>


<style scoped>
</style>