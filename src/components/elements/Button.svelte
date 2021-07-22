<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function click() {
        dispatch("click");
    }
</script>

<button on:click={click}>Отправить</button>

<style>
    button {
        font-size: 1.25rem;
        padding: 16px 5px;
        background-color: #ffdd2d;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        box-sizing: content-box;
        flex-grow: 1;
    }

    button:focus {
        outline: none;
    }
</style>
