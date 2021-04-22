import { Fragment } from 'react';

import { FundProjectionScreenOutlined } from '@ant-design/icons';

const FrontendCard = () => {
    const frontend = ["Javascript", "React", "Ant Design", "Bootstrap", "CSS", "Pug"];

    return (
        <Fragment>
            <FundProjectionScreenOutlined className="TechIcon" />
            {frontend.map(tech => <p key={ Math.random().toString(36).substr(2, 9) } > {tech} </p>)}
        </Fragment>
    );
};

export default FrontendCard;