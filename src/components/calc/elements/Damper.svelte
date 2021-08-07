<script>
    import Wrapper from "./Wrapper.svelte";
    import Select from "../props/Select.svelte";
    import Number from "../props/Number.svelte";

    const damper = {
        power: [
            "~ 220 В переменный ток",
            "~ 24 В переменный ток",
            "= 24 В постоянный ток",
        ],
        feedback: [
            "Открытие",
            "Закрытие",
            "Открытие и закрытие",
            "Сигнал 0-10 В",
            "Сигнал 4-20 мА",
        ],
        heat: [
            "Да",
            "Нет"
        ]
    };
</script>

<Wrapper name="Заслонка">
    <Select name="Питание" items="{damper.power}"/>
    <Select name="Обратная связь" items="{damper.feedback}" />
    <Select name="Подогрев" items="{damper.heat}" />
    <Number name="Ток нагрева" unit="мА" />
</Wrapper>
