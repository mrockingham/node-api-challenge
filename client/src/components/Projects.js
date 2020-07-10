import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
const Projects = (props) => {
    const {project} =props
    return (
        <div>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <Link to ={`/action/${project.id}`}>
            
                <CardText>{project.name}</CardText>
                <CardText>{project.discription}</CardText>
            </Link>
            </Card>
        </div>
    )
}

export default Projects
