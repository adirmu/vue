<script setup lang="ts">
import { useNumberMatchStore } from '@/stores/numbermatch';

const store = useNumberMatchStore();
store.Restart(6,8);

const start_drag = (i:number, j:number, event: any)=>{ event.target.releasePointerCapture(event.pointerId);store.Start_line(i,j)};
const move_drag = (i:number,j:number, event: any)=>{event.target.releasePointerCapture(event.pointerId); store.Add_box(i,j)};
const end_drag = (event: any)=>{  store.End_line() };
</script>


<template><main @mouseup="end_drag" @touchend="(event)=>end_drag(event)">
    <div v-for="(row, i) in store.board" class="hex_row">
        <div v-for="(cell, j) in store.board[i]" :class="'hex_cell ' + store.Get_color_class(i,j)"
         :style="{'background-color':('rgb(' + (30+(cell%6)*30) + ','+(30+((cell/6)%6)*30)+','+(30+((cell/36)%6)*30)+')')}"
         @mousedown="(event)=>start_drag(i,j,event)"
         @mouseenter="(event)=>move_drag(i,j,event)"

         @pointerdown="(event)=>start_drag(i,j,event)"
         @pointerenter="(event)=>move_drag(i,j,event)"
         >
            <div class="main">{{ cell }}</div>
            <div class="sub"> ({{ i }}, {{ j }}) </div>
        </div>
    </div>
    <div>
        <p v-for="log in store.logs.values()">{{ log }}</p>
    </div>
</main></template>

<style>
.hex_row{ touch-action: none; } 
main{
    display: flex;
    flex-direction: column;
    color: #ccc;
    text-shadow: -1px -1px 0 #999, 1px -1px 0 #666, -1px 1px 0 #666, 1px 1px 0 #999;
    text-align: center;
    padding: 2.5em 1em;
    margin: 1em;
    flex:1;

    .hex_row{
        display: flex;
    }
    .hex_cell{
        background-color: aliceblue;
        padding: .25em;
        margin: .125em -.125em;
        min-width: 5em;
        height: 5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 2.5em;
        user-select: none;
        font-weight: bold;
        border: 1px solid #999;
        
        &.good { border: 2px solid #9f9; }
        &.bad  { border: 2px solid #f99; }
        
        &:nth-child(2n){
            margin-top: -1.5em;
        }
    }
    .sub{
        display: none;
        font-size: .75em;
        color: #222;
    }
    @media (max-width: 1024px) {
        .hex_cell {
            min-width: 3em;
            height: 3em;
        }
        .sub{
            display: none;
        }
    }
}
</style>