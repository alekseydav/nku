<script>
  import Wrapper from "./Wrapper.svelte";
  import Select from "../props/Select.svelte";
  import Number from "../props/Number.svelte";

  export let value = {
    trigger: 0
  };

  const triggerList = [
    "Прямой пуск",
    "Преобразователь частоты",
    "Звезда / Треугольник",
  ];
</script>

<Wrapper name="Вентилятор">
  <Select name="Тип пуска" bind:value={value.trigger} items={triggerList} />
</Wrapper>