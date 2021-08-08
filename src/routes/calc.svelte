<script>
  import Damper from "../components/calc/elements/Damper.svelte";

  let damper = {};
</script>

<div class="wrapper">
  <h1 class="header">Конфигуратор</h1>
  <h3>{damper}</h3>
  <Damper bind:value={damper} />
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
