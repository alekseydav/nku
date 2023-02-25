<script>
    import Button from "$lib/Button.svelte";
</script>

<div class="container">
    <a href="/">
        <img src="/logo.png" alt="НКУ" />
    </a>

    <nav class="menu">
        <a href="#about">О компании</a>
        <a href="#projects">Проекты</a>
        <a href="#reviews">Отзывы</a>
        <a href="#contacts">Контакты</a>
    </nav>
    <Button />
</div>

<style>
    .menu {
        font-family: Roboto;
        font-size: 20px;
        flex-direction: row;
    }

    a {
        color: #2b2b2b;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
