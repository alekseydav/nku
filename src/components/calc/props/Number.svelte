<script>
    import Wrapper from "./Wrapper.svelte";
    export let name;
    export let unit;
    export let value;
</script>

<Wrapper name={name}>
    <input class="input" type="number" bind:value={value} />
    <div class="unit">{unit}</div>
</Wrapper>

<style>
    .input {
        width: 50px;
    }

    .unit {
        margin-left: 5px;
    }
</style>