<script setup lang="ts">
defineProps<{
  username: string
  email: string
  logo: string
}>()
</script>

<template>
  <div class="acoount">
    <img v-bind:src="logo" alt="nope">
    <div class="gap"></div>
    <div class="user">
      <h4>{{ username }}</h4>
      <h5>{{ email }}</h5>
    </div>
  </div>
</template>

<style scoped>
div:first-child { /*:host*/
  display: flex;
  background-color: whitesmoke;
  padding: .5em 1em;
  border-radius: 1.5em;
  max-width: 15em;
}

img{
  width: 3em;
  height: 3em;
  border-radius: 1.25em;
}
.gap{
  content: ' ';
  min-width: .5em;
  min-height: .5em;
}
.user{
  display: flex;
  flex-direction: column;
  h4{
    color: #333;
    font-weight: bold;
  }
  h5{
    color: #334;
  }

}
</style>
