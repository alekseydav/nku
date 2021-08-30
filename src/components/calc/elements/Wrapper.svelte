<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let name;

    

    function remove() {
        dispatch('remove');
    }
</script>

<div class="root">
    <div>
        <h2 class="title">{name}</h2>
        <button on:click={remove}>Удалить</button>
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