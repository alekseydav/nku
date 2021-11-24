<script>
    export let name = "";
</script>

<div class="wrapper">
    <div class="name">{name}</div>
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .wrapper {
        padding: 5px 0;
    }

    .name {
        width: 120px;
    }

    .content {
        width: 180px;
    }
</style>