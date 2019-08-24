import React  from "react";
import "./person.css"

const person =(props)=>   {
    
   
        return (
            
        <div className="person">
            <p onClick={props.deletePerson}>My name is {props.name}</p>
            <p>My age is {props.age}</p>
            <p>{props.children}</p>
            <input onChange={props.changed} />
        </div>
    )
}

export default  person;