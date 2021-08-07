<script>
    export let phone = "";
    export let isError = false;

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function onKeydown({ key }) {
        if (key === "Enter") {
            dispatch("submit");
        } else {
            disableError();
        }
    }

    function disableError() {
        isError = false;
    }
</script>

<div class="container">
    <label class="name" for="phone">Телефон</label>
    <input
        name="phone"
        class="phone"
        placeholder="Введите номер телефона"
        bind:value={phone}
        on:keydown={onKeydown}
        on:focus={disableError}
    />
    {#if isError}
        <span class="error">Введите номер телефона</span>
    {/if}
</div>

<style>
    .container {
        flex-flow: column;
        padding: 10px;
        border-radius: 10px;
        background-color: #eef2f7;
        flex-grow: 1;
    }

    .name {
        color: #9299a2;
        font-size: 1rem;
    }

    .phone {
        font-size: 1.25rem;
        margin-top: 8px;
        border: none;
        outline: none;
        background-color: inherit;
    }

    .error {
        color: #dd5656;
        font-size: 1rem;
    }
</style>
