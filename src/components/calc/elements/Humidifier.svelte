<script>
    import Wrapper from "./Wrapper.svelte";
    import Select from "../props/Select.svelte";
    import Number from "../props/Number.svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
  
    export let value = {
      power: 0,
      trigger: 0,
      current: 2,
    };

    const powerList = [
      "1 фаза / 220 В",
      "3 фазы / 380 В"
    ];

    const actuatorList = [
      "Плавное / 0-10 В",
      "Трехточечное / Откр-Закр"
    ];
  
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
  
  <Wrapper name="Увлажнитель" on:remove={remove}>
    <Number name="Ток насоса" bind:value={value.current} unit="А" />
    <Select name="Питание насоса" bind:value={value.power} items={powerList} />
    <Select name="Привод" bind:value={value.power} items={powerList} />
  </Wrapper>
  