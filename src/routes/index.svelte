<script>
	import Header from "../landing/nav/Header.svelte";
	import Footer from "../landing/nav/Footer.svelte";
	import MainText from "../landing/sections/MainText.svelte";
	import MainSlider from "../landing/sections/MainSlider.svelte";
	import About from "../landing/sections/About.svelte";
	import Projects from "../landing/sections/Projects.svelte";
	import Application from "../landing/sections/Application.svelte";
	import Regards from "../landing/sections/Regards.svelte";
	import Contacts from "../landing/sections/Contacts.svelte";

	let main_text = {
		title: "Производство щитов управления вентиляцией",
		text: "Выполняем работы по проектированию, программированию и сборке шкафов управления вентиляцией.",
	};

	let title = "Производство щитов управления вентиляцией";
	let description =
		"Выполняем работы по проектированию, программированию и сборке шкафов управления вентиляцией";
	let keywords = "Производство щитов управления вентиляцией";

	let images = [
		{ src: "1.jpg", title: "" },
		{ src: "2.jpg", title: "" },
		{ src: "3.jpg", title: "" },
		{ src: "4.jpg", title: "" },
		{ src: "5.jpg", title: "" },
		{ src: "6.jpg", title: "" },
		{ src: "7.jpg", title: "" },
	];

	let about = [
		{
			header: {
				title: "О нас",
				text: "Мы настолько уверены в качестве нашей работы, что даем пожизненную гарантию на нашу продукцию.",
			},
		},
		{
			items: [
				{ title: "Свое производство", icon: "1icon.svg" },
				{ title: "Пожизненная гарантия", icon: "2icon.svg" },
				{
					title: "Бесплатная техническая поддержка",
					icon: "3icon.svg",
				},
				{ title: "Работаем по всему миру", icon: "4icon.svg" },
				{
					title: "Разрабатываем проекты любой сложности",
					icon: "5icon.svg",
				},
				{
					title: "Каждый щит проходит тщательную проверку",
					icon: "6icon.svg",
				},
			],
		},
	];

	let projects = [
		{
			header: {
				title: "Выполненные проекты",
				text: "Мы настолько уверены в качестве нашей работы, что даем пожизненную гарантию на нашу продукцию.",
			},
		},
		{
			items: [
				{
					link: "#",
					link_name: "ЖК Вавилово",
					src: "1.jpg",
					site: "https://nku.su/",
					date: "2020 г.",
					address: "г. Москва, ул. Архитектора Власова, д. 6",
					text: "Выполнены работы по программированию, пуско-наладке и диспетчеризации 29 щитов управления системами кондиционирования, приточно-вытяжной вентиляции, тепловых завес и контроля загазованности. Использовались контроллеры компании Segnetics - SMH2G и Pixel.",
				},
				{
					link: "#",
					link_name: "ЖК Дмитреева",
					src: "4.jpg",
					site: "https://nku.su/",
					date: "2021 г.",
					address: "г. Москва, ул. Директора Дмитреева, д. 8",
					text: "Использовались контроллеры компании Segnetics - SMH2G и Pixel. Выполнены работы по программированию, пуско-наладке и диспетчеризации. ",
				},
			],
		},
	];

	let videos = [{ link: "pcY16EJ7jBg" }, { link: "TGCGMgWCEAg" }];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
</svelte:head>

<Header />

<main>
	<MainText {main_text} />

	<MainSlider {images} />

	<About {about} />

	<Projects {projects} />

	<Application {title} />

	<Regards {videos} />

	<Contacts />
</main>

<Footer />

<section id="top">

</section>

<style>
	section {
		width: 100%;
		overflow: hidden;
		margin: 0;
		padding: 0;
	}
	main {
		display: flex;
		flex-direction: column;
		padding: 0;
		width: 100%;
		max-width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media screen and (max-width: 768px) {
		main {
			margin: 0;
		}
	}
</style>
