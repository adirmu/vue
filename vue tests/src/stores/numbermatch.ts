import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useNumberMatchStore = defineStore('ticktack', () => {
    const board = ref([[0]]);
    const board_size = ref([5,8]);
    const line = ref([[-2,-2]]);
    const max = ref(10);

    const Start_line = (i:number, j:number)=>{
        line.value = [[i,j]];
        board.value[i][j]*=-1;
    }
    const End_line = ()=>{
        if (line.value.length < 3) {
            for (let index = 0; index < line.value.length; index++) {
                const element = line.value[index];
                board.value[element[0]][element[1]] *= -1;
            }
            line.value = [];
            return;
        }
        let last = -board.value[line.value[0][0]][line.value[0][1]];
        board.value[line.value[0][0]][line.value[0][1]] = 0;
        let sum = last;
        for (let index = 1; index < line.value.length; index++) {
            const element = line.value[index];
            sum += (last == -board.value[element[0]][element[1]])?1:2;
            last = -board.value[element[0]][element[1]];
            board.value[element[0]][element[1]] = 0;
        }
        if(sum>max.value){
            max.value = sum;
        }
        board.value[line.value[line.value.length-1][0]][line.value[line.value.length-1][1]] = sum;
        line.value = [];
        drop();
    }
    const Add_box = (i:number, j:number)=>{
        if (line.value.length == 0) { //might want to add "out of bounds" check here
            return;
        }
        if(board.value[i][j] > 0 && near_last(i,j)){
            board.value[i][j]*=-1;
            line.value.push([i,j]);
        }
    }
    const restart = (w:number, h:number)=>{
        board_size.value = [w,h]
        board.value = [];
        line.value = [];
        for (let i = 0; i < h; i++) {
            board.value.push([]);
            for (let j = 0; j < w; j++) {
                board.value[i].push(Math.floor(1 + Math.random() * max.value / 2));
            }
        }
    }

    function near_last(i:number, j:number){
        let last_pos = line.value[line.value.length-1];
        let last = -board.value[last_pos[0]][last_pos[1]]; // the negative is due to the way i check if an element is a member of the line
        let by_val = board.value[i][j] == last || 
            line.value.length > 1 && board.value[i][j] == last + 1;
        let sides = [
            [[-1,-1],[-1,+0],[-1,+1],
            [+0,-1],[+1,+0],[+0,+1]],
            [[+0,-1],[-1,+0],[+0,+1],
            [+1,-1],[+1,+0],[+1,+1]],
        ][j%2];
        let by_pos = sides.filter(s=> i == s[0] + last_pos[0] && j == s[1] + last_pos[1]).length > 0;
        
        return by_val && by_pos;
    }

    function drop(){
        for (let i = 0; i < board_size.value[0]; i++) {
            for (let j = board_size.value[1]-1; j > 0; j--) {
                if(board.value[j][i] == 0){
                    board.value[j][i] = Math.floor(1 + Math.random() * max.value / 2);
                    for(let k = j; k>0; k--){
                        var t = board.value[k][i];
                        board.value[k][i] = board.value[k-1][i];
                        board.value[k-1][i] = t;
                    }
                    j++;
                }
            }
            
        }
    }

    return {board, restart, Start_line, Add_box, End_line};
});