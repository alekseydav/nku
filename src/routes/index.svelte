<script>
	import "../app.css";
    import Header from "../components/blocks/Header.svelte";
	import Headline from "../components/blocks/Headline.svelte";
	import Projects from "../components/blocks/Projects.svelte";
	import Reviews from "../components/blocks/Reviews.svelte";
	import Request from "../components/blocks/Request.svelte";
	import Contacts from "../components/blocks/Contacts.svelte";
	import Footer from "../components/blocks/Footer.svelte";
</script>

<svelte:head>
	<title>Производство шкафов управления вентиляцией</title>
</svelte:head>

<Header />
<div class="container">
	<div class="content">
		<Headline />
		<Projects />
		<Reviews />
		<Request />
		<Contacts />
	</div>
</div>
<Footer />

<style>
	.container {
		justify-content: center;
	}

	.content {
		flex-direction: column;
		justify-content: center;
		width: 1120px;
		padding: 20px 10px;
	}
</style>