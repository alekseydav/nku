import db from '$lib/db';

export function get({ query }) {
    const id = query.get('id');
    const data = db.getPanel(id);

    return {
        body: data
    }
}