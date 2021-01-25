import React from 'react'

const technologies = (props) => {

    const technologies = ["Javascript", "React", "Node.js", "Express.js", "Python", "Bootstrap", "CSS (Sass)"];

    return (
        <ul className="col col-4">
            { technologies.map(technology => {
                return (
                    <li> {technology} </li>
                )
            }) }
        </ul>
    )
}

export default technologies