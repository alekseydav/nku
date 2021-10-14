<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let name;

    function moveDown() {
        dispatch('moveDown');
    }

    function moveUp() {
        dispatch('moveUp');
    }

    function remove() {
        dispatch('remove');
    }
</script>

<div class="root">
    <div>
        <h2 class="title">{name}</h2>
        <button on:click={moveDown}>↓</button>
        <button on:click={moveUp}>↑</button>
        <button on:click={remove}>✖</button>
    </div>
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .root {
        margin-top: 10px;
        flex-direction: column;
        background-color: moccasin;
        padding: 5px;
        border-radius: 5px;
    }

    .title {
        flex-grow: 1;
        font-size: 18px;
    }

    .content { 
        flex-direction: column;
        margin-top: 5px;
    }
</style>