import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/navbar"
import Card from "./components/card"
import data from "./data"
export default function App(){
    const cardsStack = data.map(
        (item) => <Card key={item.id} item={item} len={data.length}/>
        
    )

    return(
        <div>
        <Navbar/>
        {cardsStack}
        </div>
    )
}