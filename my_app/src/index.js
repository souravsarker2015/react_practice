import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import './card'
// import Card from "./components/card";
import App from "./App";

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const headingStyle={
//     backgroundColor:'purple',
//     color:"red",
//     textAlign:"center",
//     fontSize:"3rem",
//     padding:"15px"
// }

// <React.StrictMode>
//   <App />
// </React.StrictMode>,
// <h1>To do app</h1>,
// "Hello react",
// <h1 style={{color:"red",fontSize:'3rem'}}>To do</h1>