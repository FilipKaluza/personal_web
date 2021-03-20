import React from 'react';

import { FundProjectionScreenOutlined } from '@ant-design/icons';

const FrontendCard = () => {
    const frontend = ["Javascript", "React", "Ant Design", "Bootstrap", "CSS", "Pug"];

    return(
        <React.Fragment>
            <FundProjectionScreenOutlined className="TechIcon" />
            {frontend.map(tech => <p key={ Math.random().toString(36).substr(2, 9) } > {tech} </p>)}
        </React.Fragment>

    );
};

export default FrontendCard;