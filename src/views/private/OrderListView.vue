<script setup>
import  { ref, reactive } from "vue"

const orders = reactive([
    {
        id: 1,
        creation_date: "12/04/2022"
    },
    {
        id: 2,
        creation_date: "12/04/2022"
    },
    {
        id: 3,
        creation_date: "12/04/2022"
    }
])

</script>

<template>
<div>
    <ul>
        <li v-for="order in orders" :key="order.id">
            <router-link :to="`/order/${order.id}`">ID Order {{ order.id }}</router-link>
        </li>
    </ul>
</div>
</template>

<style scoped>

</style>