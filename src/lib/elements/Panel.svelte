<script>
    import Button from "$lib/elements/Button.svelte";
    import Link from "$lib/elements/Link.svelte";
</script>

<div class="wrapper">
    <div>
        <a href="/">
            <img src="/logo.png" alt="НКУ" />
        </a>

        <div class="menu">
            <nav class="nav">
                <Link href="#about" text="О компании" />
                <Link href="#projects" text="Проекты" />
                <Link href="#reviews" text="Отзывы" />
                <Link href="#contacts" text="Контакты" />
            </nav>

            <div class="contacts">
                <Link
                    href="mailto:info@nku.su"
                    text="info@nku.su"
                    bold="true"
                />
                <Link
                    href="tel:+7-916-444-11-59"
                    text="О компании"
                    bold="true"
                />
            </div>
        </div>
        <Button />
    </div>
</div>

<style>
    .wrapper {
        font-size: 20px;
        flex-direction: row;
        display: flex;
        background-color: #ebebeb;
    }

    .menu {
        width: 1110px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 65px;
        flex-direction: row;
    }

    .nav {
        width: 515px;
        font-family: Roboto;
        display: flex;
        gap: 50px;
    }

    .contacts {
        display: flex;
        gap: 50px;
    }
</style>
