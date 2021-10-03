<script context="module">
    let panels;

    export async function load({ fetch }) {
        const res = await fetch(`/api/panels`);
        panels = await res.json();
        return {};
    }
</script>

<h1>Все щиты</h1>
<table>
    {#each panels as panel}
        <tr>
            <td><a href="s/{panel.id}">{panel.id}</a></td>
            <td>{panel.project}</td>
            <td>{panel.name}</td>
        </tr>
    {/each}
</table>
