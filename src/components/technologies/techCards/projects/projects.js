import { Fragment } from 'react';

import { CheckCircleOutlined } from '@ant-design/icons';

const Projects = () => {
    const projects = [
        { name: "BurgerBuilder", link: "https://burgerproject-reactive.web.app/" },
        { name: "Kaluza.dev", link: "https://kaluza.dev" },
        { name: "Chrumaj.sk", link: "https://chrumaj.sk"}
    ]
    return (
        <Fragment>
            <CheckCircleOutlined className="TechIcon" /> <br />
            {projects.map(project => <a key={ Math.random().toString(36).substr(2, 9) } target="_blank" rel="noopener noreferrer" href={project.link} > <p > {project.name} <br /></p> </a>)}
            <p> More coming soon...</p>
        </Fragment>
    );
};

export default Projects;