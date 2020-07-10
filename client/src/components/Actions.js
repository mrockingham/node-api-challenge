import React from 'react'
import { Card, Button, CardTitle, CardText, } from 'reactstrap';
import axios from 'axios'

const Actions = (props) => {

    const userDelete = (project) =>{
    
        axios.delete(`http://localhost:5000/api/actions/${project.id}`)
        .then(res => {
            userDelete(project)
            // setUser(props)
        //    push('/app')
        //     history.go()
            
            
        })
        .catch(error =>{
            console.log(error)
          })
        }


    const {actions} = props
    return (
        <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
         <CardText>  {actions.description}</CardText> 
          <CardText> {actions.note}</CardText> 
          <CardText>{actions.completed}</CardText> 
          <Button onClick={e => {
                    e.preventDefault();
                    userDelete(actions)
                  }
                }
                >delete</Button>
          </Card>
        </div>
    )
}

export default Actions
