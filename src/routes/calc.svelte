<script>
    import Damper from "../components/calc/elements/Damper.svelte";
</script>

<div class="wrapper">
    <h1 class="header">Конфигуратор</h1>
    <Damper />
</div>

<style>
    .wrapper {
        flex-direction: column;
        align-items: center;
    }

    .header {
        margin-bottom: 15px;
        text-align: center;
        justify-content: center;
    }
</style>
