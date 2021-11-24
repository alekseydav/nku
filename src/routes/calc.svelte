<script>
  import Damper from "../calc/elements/Damper.svelte";
  import Filter from "../calc/elements/Filter.svelte";
  import HeaterWater from "../calc/elements/HeaterWater.svelte";
  import HeaterElectric from "../calc/elements/HeaterElectric.svelte";
  import Cooler from "../calc/elements/CoolerWater.svelte";
  // import Humidifier from "../calc/elements/Humidifier.svelte";
  import Fan from "../calc/elements/Fan.svelte";

  let items = [];

  function log() {
    console.log(items);
  }

  function addItem(type) {
    items = [...items, { type: type }];
  }

  function remove(e) {
    items = items.filter((t) => t.value !== e.detail);
  }
</script>

<div class="wrapper">
  <h1 class="header">Конфигуратор</h1>

  <button on:click={log}>LOG</button>
  <button on:click={() => addItem("Damper")}>Заслонка</button>
  <button on:click={() => addItem("Filter")}>Фильтр</button>
  <button on:click={() => addItem("HeaterWater")}>Нагреватель водяной</button>
  <button on:click={() => addItem("HeaterElectric")}>Нагреватель электрический</button>
  <button on:click={() => addItem("Cooler")}>Охладитель</button>
  <button on:click={() => addItem("Humidifier")}>Увлажнитель</button>
  <button on:click={() => addItem("Fan")}>Вентилятор</button>

  <div class="items">
    {#each items as item}
      {#if item.type === "Damper"}
        <Damper bind:value={item.value} on:remove={remove} />
      {:else if item.type === "Filter"}
        <Filter bind:value={item.value} on:remove={remove} />
      {:else if item.type === "HeaterWater"}
        <HeaterWater bind:value={item.value} on:remove={remove} />
      {:else if item.type === "HeaterElectric"}
        <HeaterElectric bind:value={item.value} on:remove={remove} />
      {:else if item.type === "Cooler"}
        <Cooler bind:value={item.value} on:remove={remove} />
      {:else if item.type === "Fan"}
        <Fan bind:value={item.value} on:remove={remove} />
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
