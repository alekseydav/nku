<script>
    import Contacts from "../lib/Contacts.svelte";
    import Headline from "../lib/Headline.svelte";
    import Panel from "../lib/elements/Panel.svelte";
    import Projects from "../lib/Projects.svelte";
    import About from "../lib/About.svelte";
    import Request from "../lib/Request.svelte";
    import Reviews from "../lib/Reviews.svelte";
</script>

<header>
    <Panel />
</header>

<Headline />
<About />
<Projects />
<Request />
<Reviews />
<Contacts />

<footer>
    <Panel />
</footer>

<style>
    :global(body) {
        margin: 0;
    }

    :global(body:nth-child(odd)) {
        background-color: #e5e5e5;
    }

    :global(body:nth-child(even)) {
        background-color: #dfe1e3;
    }
</style>
