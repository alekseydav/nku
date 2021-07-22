import telegram from '$lib/telegram';

export async function post({ body }) {
    const data = JSON.parse(body);
    telegram.sendMessage(`${data.phone}\n${data.title}\n${data.url}`)
}