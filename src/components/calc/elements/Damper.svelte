<script>
  import Wrapper from "./Wrapper.svelte";
  import Select from "../props/Select.svelte";
  import Number from "../props/Number.svelte";

  export let value = {
    power: 0,
    current: 100,
    spring: 0,
    feedback: 0,
    heat: false,
    heatCurrent: 100,
  };

  const powerList = ["~ 220 В переменный ток", "~ 24 В переменный ток"];

  const springList = ["Да", "Нет"];

  const feedbackList = [
    "Открытие",
    "Закрытие",
    "Открытие и закрытие",
    "Сигнал 0-10 В",
    "Сигнал 4-20 мА",
  ];

  const heatList = ["Нет", "Да"];
</script>

<Wrapper name="Заслонка">
  <Select name="Питание" bind:value={value.power} items={powerList} />
  <Number name="Ток" bind:value={value.current} unit="мА" />
  <Select
    name="Пружинный возврат"
    bind:value={value.spring}
    items={springList}
  />
  <Select
    name="Обратная связь"
    bind:value={value.feedback}
    items={feedbackList}
  />
  <Select name="Подогрев" bind:value={value.heat} items={heatList} />
  {#if value.heat}
    <Number name="Ток нагрева" bind:value={value.heatCurrent} unit="мА" />
  {/if}
</Wrapper>
