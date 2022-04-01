import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const todoTitle = "Tito";
const todoDescription = "Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many\n" +
    "        waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On\n" +
    "        the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal\n" +
    "        Bengal tiger. ";
const date=new Date();
const todo_date=date.getDate();
const todo_month=date.getMonth();
const todo_year=date.getFullYear();
// const headingStyle={
//     backgroundColor:'purple',
//     color:"red",
//     textAlign:"center",
//     fontSize:"3rem",
//     padding:"15px"
// }
ReactDOM.render(

<div>
    {/*<h1 style={headingStyle}>To do</h1>*/}
    <h1 className="headingStyle largeTest">To do</h1>
    <h2>{todoTitle}</h2>
    <p>{todoDescription}</p>
    <p>{todo_date +"/"+todo_month+"/"+todo_year}</p>
</div>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <React.StrictMode>
//   <App />
// </React.StrictMode>,
// <h1>To do app</h1>,
// "Hello react",
// <h1 style={{color:"red",fontSize:'3rem'}}>To do</h1>