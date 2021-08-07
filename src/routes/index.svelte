<script>
    import Header from "../components/landing/Header.svelte";
	import Headline from "../components/landing/Headline.svelte";
	import Projects from "../components/landing/Projects.svelte";
	import Reviews from "../components/landing/Reviews.svelte";
	import Request from "../components/landing/Request.svelte";
	import Contacts from "../components/landing/Contacts.svelte";
	import Footer from "../components/landing/Footer.svelte";
</script>

<svelte:head>
	<title>Производство шкафов управления вентиляцией</title>
</svelte:head>

<Header />
<div class="container">
	<div class="content">
		<Headline />
		<Projects />
		<!-- <Reviews /> -->
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