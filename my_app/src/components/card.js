import React from "react";

const todoTitle = "Tito";
const todoDescription = "Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many\n" +
    "        waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On\n" +
    "        the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal\n" +
    "        Bengal tiger. ";
const date = new Date();
const todo_date = date.getDate();
const todo_month = date.getMonth();
const todo_year = date.getFullYear();

function Card(props) {
    console.log(props)
     // const {cardText,cardDesc}=props
    return <div className="card">
        <h2 className="cardTitle">{props.cardText}</h2>
        <p className="cardDesc">{props.cardDesc}</p>
        <h2 className="cardTitle">{todoTitle}</h2>
        <p className="cardDesc">{todoDescription}</p>
        <p className="cardFooter">{todo_date + "/" + todo_month + "/" + todo_year}</p>
    </div>
}

export default Card


// const name=["tito",'rasel']
//
// const ["tito","rasel"]=name