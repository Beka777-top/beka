import React, { createContext, useState, useEffect } from "react";

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
    const [flights, setFlights] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const initialFlights = [
            {
                id: 1,
                from: "Almaty",
                to: "Astana",
                price: "250000₸",
                airline: "Air Astana",
                seats: new Array(50).fill(null),
            },
            {
                id: 2,
                from: "Shymkent",
                to: "Almaty",
                price: "200000₸",
                airline: "SCAT Airlines",
                seats: new Array(50).fill(null),
            },
            {
                id: 3,
                from: "Aktau",
                to: "Atyrau",
                price: "220000₸",
                airline: "Bek Air",
                seats: new Array(50).fill(null),
            },
            {
                id: 4,
                from: "Karaganda",
                to: "Pavlodar",
                price: "180000₸",
                airline: "Qazaq Air",
                seats: new Array(50).fill(null),
            },
            {
                id: 5,
                from: "Uralsk",
                to: "Oral",
                price: "150000₸",
                airline: "Air Astana",
                seats: new Array(50).fill(null),
            },
        ];

        setFlights(initialFlights);
    }, []);

    return (
        <FlightContext.Provider value={{ flights, setFlights, bookings, setBookings }}>
            {children}
        </FlightContext.Provider>
    );
};
