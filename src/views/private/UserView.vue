<script setup>
import { ref, computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
const c_username = computed(() => store.state.username)
const c_first_name = computed(() => store.getters.first_name)
const username = ref(c_username.value)

const event_update_user = () => {
  store.dispatch("update_user_info", username)
}
</script>

<template>

  <div class="user__form__update">
    <form @submit.prevent="event_update_user">
      <div>
        <label for="username">Username</label>
      </div>
      <div>
        <input type="text" name="username" id="username" v-model="username" />
      </div>
      <div>
        <input type="submit" value="Update">
      </div>
    </form>
  </div>

  <div>
    <p>Username: {{ c_username }}</p>
    <p>First name: {{ c_first_name }}</p>
  </div>
</template>

<style scoped>
.user__form__update {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
</style>
