import { Link } from "react-scroll";
import Col from "antd/lib/col";

import "./techButton.css";


const TechButton = (props) => {
    return (
        <Col xs={24} className="TechButtonForContactWrapper"  >
            <Link  activeClass="active" to="Footer" spy={true} smooth={false} offset={-100}> <button > Contact Me</button></Link>
        </Col>
    );
};

export default TechButton;
