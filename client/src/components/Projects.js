import React from 'react'
import { Link, useHistory } from 'react-router-dom'
const Projects = (props) => {
    const {project} =props
    return (
        <div>
            List of Projects
                {project.name}
            
        </div>
    )
}

export default Projects
