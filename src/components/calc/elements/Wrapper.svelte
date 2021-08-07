<script>
    export let name = "";
</script>

<div class="root">
    <h2 class="header">{name}</h2>
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .root {
        flex-direction: column;
        background-color: moccasin;
        padding: 5px;
    }

    .header {
        font-size: 18px;
    }

    .content { 
        flex-direction: column;
    }

    /* .item {
        outline: 1px solid #ccc;
        padding: 5px;
    }

    .header {
        font-weight: bold;
        text-decoration: underline;
        margin-bottom: 10px;
    } */
</style>
