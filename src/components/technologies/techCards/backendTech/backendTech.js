import React from 'react';

import { ClusterOutlined } from '@ant-design/icons';

const BackendTech = () => {
    const backend = ["Node.js", "Express.js", "Python", "Flask" , "MongoDB"];

    return(
        <React.Fragment>
            <ClusterOutlined className="TechIcon" />
            {backend.map(techback  => <p key={ Math.random().toString(36).substr(2, 9) }> {techback} </p>)}
        </React.Fragment>

    );
};

export default BackendTech;