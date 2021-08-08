<script>
    import Wrapper from "./Wrapper.svelte";
    import Select from "../props/Select.svelte";
    import Number from "../props/Number.svelte";

    const damper = {
        selPower: "",
        selFeedback: "",
        selHeat: false,

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
    <Select name="Питание" selected="{damper.selPower}" items="{damper.power}"/>
    <Number name="Ток" unit="мА" />
    <Select name="Обратная связь" items="{damper.feedback}" />
    <Select name="Подогрев" items="{damper.heat}" />
    {#if user.loggedIn}
    <Number name="Ток нагрева" unit="мА" />
    {/if}
</Wrapper>
