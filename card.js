import React from "react"
import ReactDOM from "react-dom"

export default function Card(props){
    
     
    return(
        
        <div className="card">
        
        <img src={props.item.imageUrl}/>
        <section className="details">
        <p className="location">{props.item.location} <span className="maps">View on Google maps</span></p>
        <h3 className="title">{props.item.title}</h3>
        <p className="date">{props.item.startDate} - {props.item.endDate} </p>
        <p className="description">{props.item.description}</p>
       { props.len!=props.item.id && <hr/>}
        </section>
        
        </div>
    )
}