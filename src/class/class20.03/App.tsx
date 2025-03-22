import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Protect } from "./Protect";

export default function App() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />

        <Route element={<Protect/>}>
            <Route path="/Isa" element={<Isa_Acc/>} />
        </Route>
        <Route path="Biba" element={<BiBa_Acc/>}/>
    </Routes>
    </BrowserRouter>
    )
}

function Home(){
    return <h1>Home Page</h1>
}

function Isa_Acc(){
    return <h1>Isa Account</h1>
}

function BiBa_Acc(){
    return <h1>Biba Account</h1>
}