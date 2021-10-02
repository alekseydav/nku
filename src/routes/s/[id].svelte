<script context="module">
	export async function load({ page, fetch, session, context }) {
		console.log(page);


		// const url = `/blog/${page.params.slug}.json`;
		// const res = await fetch(url);

		// if (res.ok) {
		// 	return {
		// 		props: {
		// 			article: await res.json()
		// 		}
		// 	};
		// }

		// return {
		// 	status: res.status,
		// 	error: new Error(`Не могу загрузить ${url}`)
		// };
	}
</script>

<h1>Заказ</h1>