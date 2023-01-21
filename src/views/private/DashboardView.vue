<script setup>

</script>

<template>
    <div class="menu">
        <ul>
            <li>
                <router-link :to="`/order`">Listado de ordenes</router-link>
            </li>
            <li>
                <router-link :to="`/shippinggroups`">Listado de SGs</router-link>
            </li>
        </ul>
    </div>
    <main>
        <router-view />
    </main>
</template>

<style scoped>

</style>