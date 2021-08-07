<script>
    import Wrapper from "./Wrapper.svelte";
    export let name = "";
    export let items = [];
</script>

<Wrapper name={name}>
    <select>
        {#each items as item}
            <option>{item}</option>
        {/each}
    </select>
</Wrapper>