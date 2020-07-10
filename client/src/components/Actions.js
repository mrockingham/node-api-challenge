import React from 'react'

const Actions = (props) => {
    const {actions} = props
    return (
        <div>
         <div>  {actions.description}</div> 
          <div> {actions.note}</div> 
          <div>{actions.completed}</div>  
        </div>
    )
}

export default Actions
