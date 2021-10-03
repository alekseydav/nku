<script context="module">
	let id, name, project;

	export async function load({ page, fetch }) {
		const res = await fetch(`/api/panel?id=${page.params.id}`);
		const data = await res.json();

		id = data.id;
		name = data.name;
		project = data.project;

		fetch(`/api/send`, {
            method: "POST",
            body: `Переход по ссылке:\nid: ${id}\nЩит: ${name}\nПроект: ${project}`
        });

		return {};
	}
</script>

<h1>Заказ</h1>
<div>Щит: {name}</div>
<div>Код: {id}</div>
<div>Проект: {project}</div>
