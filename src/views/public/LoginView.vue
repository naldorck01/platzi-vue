<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const store = useStore()
const username = ref()
const router = useRouter()

const event_submit = () => {
    store.commit("update_user_name", username)
    router.push({ name: "app" })
}

</script>

<template>
    <main>
        <div className="login__form">
            <form @submit.prevent="event_submit">
                <label for="login__username">Username</label>
                <br />
                <input type="text" id="login__username" v-model="username" />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    </main>
</template>

<style scoped>

</style>