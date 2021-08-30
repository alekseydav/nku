<script>
  import Damper from "../components/calc/elements/Damper.svelte";
  import Fan from "../components/calc/elements/Fan.svelte";

  let items = [];

  function addFan() {
    items = [
      ...items,
      {
        type: "fan",
        trigger: 0,
        current: 2,
      },
    ];
  }

  function addDamper() {
    items = [
      ...items,
      {
        type: "damper",
        power: 0,
        current: 100,
        spring: 0,
        feedback: 0,
        heat: false,
        heatCurrent: 100,
      },
    ];
  }

  function remove(e) {
    items = items.filter(t => t !== e.detail)
  }
</script>

<div class="wrapper">
  <h1 class="header">Конфигуратор</h1>

  <button on:click={addFan}>Вентилятор</button>
  <button on:click={addDamper}>Заслонка</button>

  <div class="items">
    {#each items as item}
      {#if item.type === "damper"}
        <Damper bind:value={item} on:remove={remove} />
      {:else if item.type === "fan"}
        <Fan bind:value={item} on:remove={remove} />
      {/if}
    {/each}
  </div>
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

  .items {
    flex-direction: column;
  }
</style>
