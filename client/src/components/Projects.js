import React from 'react'
import { Link, useHistory } from 'react-router-dom'
const Projects = (props) => {
    const {project} =props
    return (
        <div>
            <Link to ={`/action/${project.id}`}>
            List of Projects
                {project.name}
            </Link>
        </div>
    )
}

export default Projects
