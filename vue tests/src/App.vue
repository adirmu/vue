<script setup lang="ts">
import { RouterView } from 'vue-router'
import Account from './components/Account.vue'
import Main_nav from './components/Main_nav.vue'
</script>

<template>
  <header>
    <Account username="Adir mugrabi" email="mugrabi.adir@gmail.com" logo="https://yt3.ggpht.com/yti/ANjgQV9VPZTg5H_tZsAWR5ggITmYN6wrOp0yNlFKg4caNSCt1JsQ=s88-c-k-c0x00ffffff-no-rj" />
    <Main_nav />
  </header>

  <RouterView />
</template>

<style scoped>
header{
  background-color: rgb(5, 15, 50);
  min-height: 100vh;
}
@media only screen and (max-width: 600px) {
  header{
    display: none;
  }
}
</style>
