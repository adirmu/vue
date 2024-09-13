<script setup lang="ts">
  import { useTicktackStore } from '@/stores/ticktack';
  import { ref } from 'vue';

  const store = useTicktackStore();
  const game_size = ref(store.game_size);
  const board_size = ref(store.board_size);
  store.restart(game_size.value, board_size.value);
</script>

<template><main>
  <div class="header">
    <h1>Mover Tic tack tow</h1>
  </div>
  <div class="details">
    <p>each turn you can do 1 of 3 actions:</p>
    <p>1. place one of your pieces</p>
    <p>2. move the grid 1 slot u/d/l/r</p>
    <p>3. reposition one of your pieces</p>
    <p>you can place a piece on every open slot on the board, even outside the game grid. but you only win if you have a row of 3 in the game grid.</p>
  </div>
  <div class="info"> now playing: {{ store.active_player }}</div>
  <div class="actions">
    <div class="button" v-on:click=" store.move_game_pos(+1,0)"> move down </div>
    <div class="button" v-on:click=" store.move_game_pos(-1,0)"> move up </div>
    <div class="button" v-on:click=" store.move_game_pos(0,-1)"> move left </div>
    <div class="button" v-on:click=" store.move_game_pos(0,+1)"> move right </div>
  </div>
  <div class="actions">
    <div class="button restart" v-on:click=" store.restart(game_size, board_size) "> restart({{game_size}}, {{board_size}}) </div>
    <div class="button"><label for="game"></label> game <input id="game" v-model="game_size" /></div>
    <div class="button"><label for="ass"></label> game <input id="game" v-model="board_size" /></div>
  </div>
  <div class="board">
    <div class="bg" :style="{'top':(store.get_game_pos(0) + 'em'), 'left':(store.get_game_pos(1) + 'em'), 'width': (store.get_game_size() +'em'), 'height': (store.get_game_size() +'em')}"></div>
    <div v-for="i in store.board_size" class="board_col">
      <div v-for="j in store.board_size" class="board_row" v-on:click="store.play(i-1,j-1)">
        {{ store.board[i-1][j-1] }}
      </div>
    </div>
  </div>
  
  
    
</main></template>


<style>
  .board{
    font-size: 2em;
    position: relative;
  }
  .bg{
    position: absolute;
    background-color:green;
    z-index:0;
  }
  .board_col {
    display: flex;
  }
  .board_row{
    background-color: #ccc;
    color: #333;
    font-weight: bold;
    border: 5px solid #333;
    border-radius: .5em;
    margin: .125em;
    padding: .5em 0;
    min-width: 3em;
    min-height: 3em;
    text-align: center;
    cursor: pointer;
    z-index: 1;

    &:hover{
      background-color: #669;
    }
  }
  .actions{
    display:flex;
  }
  .button {
    margin: 1em 0.5em;
    background: #777;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    box-shadow: 2px 2px 2px 2px #333, -2px -2px 2px 2px #999;
    cursor:pointer;
    
    &:hover{
      background:#888;
    }
  }
  .restart{
    background: #f99;
    color:#333;
    font-weight:bold;
  }
</style>