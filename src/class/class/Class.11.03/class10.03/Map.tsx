import React from 'react';
import { useState } from "react";

export default function App() {
    let students = ["Dias", "Aidana", "Aigerim"];

    return (
        <ul>
            {students.map((student, index) => (
                <li key={index}>{student}</li>
            ))}
        </ul>
    );
}