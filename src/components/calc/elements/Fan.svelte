<script>
  import Wrapper from "./Wrapper.svelte";
  import Select from "../props/Select.svelte";
  import Number from "../props/Number.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let value = {
    trigger: 0,
    current: 2,
  };

  const triggerList = [
    "Прямой пуск",
    "Преобразователь частоты",
    "Звезда / Треугольник",
  ];

  function moveDown() {
    dispatch("moveDown", value);
  }

  function moveUp() {
    dispatch("moveUp", value);
  }

  function remove() {
    dispatch("remove", value);
  }
</script>

<Wrapper name="Вентилятор" on:remove={remove}>
  <Select name="Тип пуска" bind:value={value.trigger} items={triggerList} />
  <Number name="Ток" bind:value={value.current} unit="А" />
</Wrapper>
