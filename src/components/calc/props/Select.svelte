<script>
    import Wrapper from "./Wrapper.svelte";
    export let name = "";
    export let selected = "";
    export let items = [];
</script>

<Wrapper name={name}>
    <select value={selected}>
        {#each items as item}
            <option>{item}</option>
        {/each}
    </select>
</Wrapper>