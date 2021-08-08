<script>
    import Wrapper from "./Wrapper.svelte";
    export let name;
    export let value;
    export let items;
</script>

<Wrapper name={name}>
    <select bind:value={value}>
        {#each items as item, idx}
            <option value={idx}>{item}</option>
        {/each}
    </select>
</Wrapper>