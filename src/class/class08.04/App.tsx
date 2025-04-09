import React from "react";
import "./style.css"

export default function App() {
    const money = "1.000.000.000$"
    return(
        <div>
        <p>Акимат {money}</p>
            <Second money={money} />
        </div>
    )
}

function Second({money}){
    return(
        <div>
            <p>зам-Акима {money}</p>
            <Third money={money}/>
        </div>
    )
}

function Third({money}){
    return(
        <div>
            <p>Ап-Акима {money}</p>
            <Fourth money={money} />
        </div>
    )
}

function Fourth({money}){
    return(
        <div>
            <p>Отделы-Управления {money}</p>
        </div>
    )
}

