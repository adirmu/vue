<script setup lang="ts">
defineProps<{
  link: string
}>()
</script>

<template>
  <RouterLink v-bind:to="link">
    <div class="item">
      <i>
        <slot name="icon"></slot>
      </i>
      <div class="gap"></div>
      <div class="details">
        <div class="primary"> <slot name="heading"></slot> </div>
        <slot></slot>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
  div:first-child { /*:host*/
    display: flex;
    background-color: whitesmoke;
    padding: .5em 1em;
    border-radius: 1.5em;
    max-width: 15em;
    margin: .25em auto;
    font-size: .75em;
  }
  i>*{
    width: 3em;
    height: 3em;
  }
  .gap{
    min-width: 1em;
    min-height: .5em;
  }
  .details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex:1;
    margin: auto;

    .primary{
      font-size: 1.17em;
      flex:1;
      margin: 0;
      padding: 0;
    }
    >*{
      flex:1;
    }
  }
</style>
