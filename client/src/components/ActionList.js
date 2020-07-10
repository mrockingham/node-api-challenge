import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import Action from './Actions'

const ActionList = (proops) => {
    const params= useParams()
    const {push}= useHistory()
    const [actions, setActions] =useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/projects/${params.id}/action`)
        .then(res =>{
            console.log('what is this', res.data)
            setActions(res.data.data)
        })
    },[])


    return (
        <div>
            Actions
            {actions.map(actions =>(
                <Action actions ={actions} key ={actions.id} />
            ))}
            
        </div>
    )
}

export default ActionList
