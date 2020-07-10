

import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Project from './Projects'

const ProjectList = (props) => {
    const [project, setProject] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/api/projects/')
        .then(res =>{
            console.log(res.data)
            setProject(res.data.data)
        })
    },[])
    

    return (
        <div>
            List of Projects
            {project.map(project =>(
                <Project project ={project} key ={project.id} />
            ))}
        </div>
    )
}

export default ProjectList
