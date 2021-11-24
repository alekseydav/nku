import node from '@sveltejs/adapter-node';

export default {
    kit: {
        adapter: node({
            entryPoint: 'src/server.js'
        })
    }
};