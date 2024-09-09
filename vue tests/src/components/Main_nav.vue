<script setup lang="ts">
import NavItem from './Nav_item.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faInfo, faGamepad } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
  <nav>
    <NavItem link="/">
      <template #icon> <FontAwesomeIcon :icon="faHouse" /> </template>
      <template #heading>home</template>
    </NavItem>
    
    <NavItem link="/ticktack">
      <template #icon><FontAwesomeIcon :icon="faGamepad" /></template>
      <template #heading>tick tack</template>
    </NavItem>
    
    <NavItem link="/numbermatch">
      <template #icon><FontAwesomeIcon :icon="faGamepad" /></template>
      <template #heading>number match</template>
    </NavItem>

    <NavItem link="/about">
      <template #icon><FontAwesomeIcon :icon="faInfo" /></template>
      <template #heading>about</template>
    </NavItem>
  </nav>
</template>

<style scoped>
  nav{
    display: flex;
    flex-direction: column;
    max-width: 15em;
    margin-top: .25em;
    flex: 1;
  }
</style>
