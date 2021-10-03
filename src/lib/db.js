import fs from 'fs'
const panels = JSON.parse(fs.readFileSync('db/panels.json', 'utf8'));
const projects = JSON.parse(fs.readFileSync('db/projects.json', 'utf8'));


export default {
    getPanel: id => {
        const panel = panels.find(item => item.id === id)
        if (!panel)
            return null;
        const project = projects.find(item => item.id === panel.project)
    
        return {
            id: panel.id,
            name: panel.name,
            project: project.name
        }
    },
    getPanels: () => {
        return panels;
    }
} 