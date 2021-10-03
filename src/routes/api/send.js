import telegram from '$lib/telegram';

export function post({ body }) {
    telegram.sendMessage(body)
}