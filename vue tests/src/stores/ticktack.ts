import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTicktackStore = defineStore('ticktack', () => {
  const players = ['X','O'];
  const board = ref([['0']]);
  const active_player = ref(0);
  const board_size = ref(5);
  const game_size = ref(3);
  const game_pos = ref([0,0]);


  function restart() {
    game_pos.value = [0,0];
    board.value=[];
    for (let i = 0; i < board_size.value; i++) {
      board.value[i] = [];
      for (let j = 0; j < board_size.value; j++) {
        board.value[i].push('');
      }
    }
  }
  function checkWin(){
    for (let i = 0; i < game_size.value; i++) {
      let h = board.value[i+game_pos.value[0]][0+game_pos.value[1]], v = board.value[0+game_pos.value[0]][i+game_pos.value[1]];
      for (let j = 0; j < game_size.value; j++) {
        v = board.value[j+game_pos.value[0]][i+game_pos.value[1]] == v ? v : "";
        h = board.value[i+game_pos.value[0]][j+game_pos.value[1]] == h ? h : "";
      }
      if(v!="") alert(v + " won! (v"+i+")");
      if(h!="") alert(h + " won! (h"+i+")");
    }
  }

  function play(x:number,y:number) {
    if(board.value[x][y] != '') return;
    board.value[x][y] = players[active_player.value];
    active_player.value = 1-active_player.value;
    checkWin();
  }

  const get_game_size = ()=>{ return game_size.value * 3.25;}
  const get_game_pos = (axis:number)=>{ return game_pos.value[axis] * 3.25;}
  const move_game_pos = (x:number, y:number)=>{
    if(x>0 && game_pos.value[0]+game_size.value < board_size.value || x<0 && game_pos.value[0]>0)
      game_pos.value[0] += x;
    if(y>0 && game_pos.value[1]+game_size.value < board_size.value || y<0 && game_pos.value[1]>0)
      game_pos.value[1] += y;
    checkWin();
  }

  return { board, board_size, game_size, active_player, move_game_pos, get_game_size, get_game_pos, restart, play }
})
