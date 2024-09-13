<script setup lang="ts">
import { ref } from 'vue';

const columns = ref([
  ['שם','text_input'],
  ['שעה','ddl_ranged_distinct', ['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']]
  ]);
</script>

<template>
  <div class="planner">
    <div class="headers columns">
      <div class="column" v-for="c in columns">
        {{ c[0] }}
      </div>
    </div>
    <div class="columns">
      <div class="column" v-for="c in columns">
        <div v-if="c[1]=='text_input'"><input type="text"></div>
        <div v-if="c[1]=='ddl_ranged'">
          <select>
            <option v-for="o in c[2]"  value="o">{{ o }}</option>
          </select>
        </div>
        <div v-if="c[1]=='ddl_ranged_distinct'">
          <select>
            <option v-for="o in c[2]"  value="o">{{ o }}</option>
          </select>
        </div>
        <div v-if="c[1]=='ddl_options'"></div>
        <div v-if="c[1]=='ddl_options_distinct'"></div>
      </div>
    </div>
    <div>
      <button type="button">Add column</button>
    </div>
  </div>
</template>

<style>
.columns{
  display: flex;
  >*{
    width: 10em;
    margin: 0.25em 0.5em;
  }
  input, select{
    max-width: 100%;
    min-width: 100%;
    text-align: center;
  }
}
</style>
