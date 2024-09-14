<script setup lang="ts">
import { useNumberMatchStore } from '@/stores/numbermatch';

const store = useNumberMatchStore();
store.Restart(6,8);
</script>


<template><main @mouseup="()=>{store.End_line()}" @touchend="()=>{store.End_line()}">
    <div v-for="(row, i) in store.board" class="hex_row">
        <div v-for="(cell, j) in store.board[i]" class="hex_cell"
         :style="{'background-color':('rgb(' + (30+(cell%6)*30) + ','+(30+((cell/6)%6)*30)+','+(30+((cell/36)%6)*30)+')')}"
         @mousedown="()=>{store.Start_line(i,j)}"
         @touchstart="()=>{store.Start_line(i,j)}"
         @mouseenter="()=>{store.Add_box(i,j)}"
         @touchmove="()=>{store.Add_box(i,j)}"
         @drag="(store.Add_box(i, j))"
         >
            <div class="main">{{ cell }}</div>
            <div class="sub">
                ({{ i }}, {{ j }})
            </div>
        </div>
    </div>
</main></template>

<style>
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