<script>
    import Wrapper from "./Wrapper.svelte";
    export let name = "";
    export let unit = "";
</script>

<Wrapper name={name}>
    <input class="input" type="number" />
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