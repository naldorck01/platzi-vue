<script setup>
import { ref, reactive, watchEffect, onMounted } from "vue"
import { useStore } from "vuex"

const store = useStore()

let order = reactive({
    list: []
})

watchEffect(async () => {
    const res = await store.dispatch("get_order_list")
    order.list.push(...res.message.records)
})


</script>

<template>
    <div>
        <ul>
            <li v-for="_order in order.list" :key="_order.id">
                <router-link :to="`/order/${_order.id}`">ID Order {{ _order.id }}</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>
