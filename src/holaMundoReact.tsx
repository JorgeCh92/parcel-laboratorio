import React from "react";
import ReactDOM from "react-dom";

const currentDate: string = new Date().toDateString();  

ReactDOM.render(
    <h1>Hola Mundo con React</h1>,
    document.getElementById("holaMundoReact")
);

ReactDOM.render(
    <span>
        
    </span>,
    document.getElementById("currentDate")
);

ReactDOM.render(
    <span>
        {currentDate}
    </span>,
    document.getElementById("currentDate")
);