import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FlightContext } from "./FlightContext";

const FlightBooking = () => {
    const { flightId } = useParams();
    const { flights, setBookings, bookings } = useContext(FlightContext);
    const [flight, setFlight] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        passengerName: "",
        passengerDate: "",
        selectedSeats: 1,
    });

    const navigate = useNavigate();

    useEffect(() => {
        const selectedFlight = flights.find(f => f.id === parseInt(flightId));
        setFlight(selectedFlight || null);
        setLoading(false);
    }, [flightId, flights]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBooking = (e) => {
        e.preventDefault();
        if (!formData.passengerName || !formData.passengerDate || formData.selectedSeats < 1) {
            alert("Барлық өрістерді дұрыс толтырыңыз!");
            return;
        }
        if (formData.selectedSeats > flight.seats) {
            alert(`Таңдалған орын саны қолжетімді орындардан асып кетті! Қолжетімді орындар: ${flight.seats}`);
            return;
        }
        const bookingData = {
            flightId: flight.id,
            ...formData,
            bookingDate: new Date().toISOString(),
        };
        setBookings([...bookings, bookingData]);
        alert("Тапсырыс сәтті жасалды!");
        navigate("/");
    };

    if (loading) {
        return <div>Loading flight details...</div>;
    }

    if (!flight) {
        return <div>Flight not found!</div>;
    }

    return (
        <div>
            <h1>Flight Booking</h1>
            <h2>
                {flight.from} to {flight.to} - {flight.price}
            </h2>
            <form onSubmit={handleBooking}>
                <div>
                    <label>Passenger Name:</label>
                    <input
                        type="text"
                        name="passengerName"
                        value={formData.passengerName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Travel Date:</label>
                    <input
                        type="date"
                        name="passengerDate"
                        value={formData.passengerDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Number of Seats:</label>
                    <input
                        type="number"
                        name="selectedSeats"
                        value={formData.selectedSeats}
                        onChange={handleChange}
                        min="1"
                        max={flight.seats}
                        required
                    />
                    <p>Available seats: {flight.seats}</p>
                </div>
                <button type="submit">Book Flight</button>
            </form>
        </div>
    );
};

export default FlightBooking;