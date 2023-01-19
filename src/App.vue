<template>
  <Suspense>
    <template #default>
      <HomeComponent msg="Welcome to Your Vue.js App" />
    </template>
    <template #fallback>
      <LoadingSpinner />
    </template>
  </Suspense>
</template>

<script>
import { defineAsyncComponent } from "vue"
import LoadingSpinner from "@/components/LoadingSpinner"

export default {
  name: "App",
  components: {
    HomeComponent: defineAsyncComponent(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(import("@/components/HomeComponent.vue"))
        }, 2500)
      })
    }),
    LoadingSpinner,
  },
}
</script>

<style>
@import "assets/css/reset.css";

body {
  font-family: "Montserrat", sans-serif;
}
</style>
