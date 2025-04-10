import React, { createContext, useState, useEffect } from "react";

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
    const [flights, setFlights] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        setFlights([
            { id: 1, from: "Almaty", to: "Astana", price: "250000₸", airline: "Air Astana" },
            { id: 2, from: "Shymkent", to: "Almaty", price: "200000₸", airline: "SCAT Airlines" },
            { id: 3, from: "Aktau", to: "Atyrau", price: "220000₸", airline: "Bek Air" },
        ]);
    }, []);

    return (
        <FlightContext.Provider value={{ flights, setFlights, bookings, setBookings }}>
            {children}
        </FlightContext.Provider>
    );
};
