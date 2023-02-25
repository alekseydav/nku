<script>
    export let href;
    export let text;
    export let bold = false;
</script>

<a class:bold="{bold}" {href}>{text}</a>

<style>
    a {
        color: #2b2b2b;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .bold {
        font-weight: bold;
    }
</style>
