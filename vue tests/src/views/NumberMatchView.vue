<script setup lang="ts">
import { useNumberMatchStore } from '@/stores/numbermatch';

const store = useNumberMatchStore();
store.restart(6,8);
</script>


<template><main>
    <div v-for="(row, i) in store.board" class="hex_row">
        <div v-for="(cell, j) in store.board[i]" class="hex_cell"
         @mousedown="()=>{store.Start_line(i,j)}"
         @mouseup="()=>{store.End_line(i,j)}"
         @mouseenter="()=>{store.Add_box(i,j)}"
         >
            {{ cell }}
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
    color: #333;
    text-align: center;
    padding-top: 2.5em;

    .hex_row{
        display: flex;
    }
    .hex_cell{
        background-color: aliceblue;
        padding: .25em;
        margin: .125em -.25em;
        width: 5em;
        height: 5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 2.5em;
        user-select: none;
        font-weight: bold;

        &:nth-child(2n){
            margin-top: -2.5em;
        }
    }
    .sub{
        /*display: none;*/
        font-size: .75em;
        color: #222;
    }
}
</style>