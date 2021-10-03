import db from '$lib/db';

export function get() {
    const data = db.getPanels();

    return {
        body: data
    }
}