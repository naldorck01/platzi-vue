<template>
  <div class="loading">
    <img src="@/assets/svg/loading.svg" alt="Loading" />
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
}
</script>

<style scope>
.loading {
  background-color: #fefefe;
  display: grid;
  place-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 9;
}
</style>
