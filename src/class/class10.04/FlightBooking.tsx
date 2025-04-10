import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FlightContext } from "./FlightContext";

const FlightBooking = () => {
    const { flightId } = useParams();
    const { flights, setFlights, setBookings, bookings } = useContext(FlightContext);
    const [flight, setFlight] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        passengerName: "",
        passengerDate: "",
        selectedSeats: 1,
    });
    const [selectedSeats, setSelectedSeats] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const selectedFlight = flights.find(f => f.id === parseInt(flightId));
        setFlight(selectedFlight || null);
        setLoading(false);
    }, [flightId, flights]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleSeat = (index) => {
        if (flight.seats[index]) return;

        if (selectedSeats.includes(index)) {
            setSelectedSeats(selectedSeats.filter(i => i !== index));
        } else if (selectedSeats.length < parseInt(formData.selectedSeats)) {
            setSelectedSeats([...selectedSeats, index]);
        } else {
            alert(`Сіз тек ${formData.selectedSeats} орын таңдай аласыз`);
        }
    };

    const handleBooking = (e) => {
        e.preventDefault();

        if (!formData.passengerName || !formData.passengerDate || formData.selectedSeats < 1) {
            alert("Барлық өрістерді дұрыс толтырыңыз!");
            return;
        }

        if (selectedSeats.length !== parseInt(formData.selectedSeats)) {
            alert("Таңдалған орын саны көрсетілген санмен сәйкес келмейді!");
            return;
        }

        const bookingData = {
            flightId: flight.id,
            ...formData,
            selectedSeats,
            bookingDate: new Date().toISOString(),
        };

        const updatedFlights = flights.map(f => {
            if (f.id === flight.id) {
                const updatedSeats = [...f.seats];
                selectedSeats.forEach(index => {
                    updatedSeats[index] = formData.passengerName;
                });
                return { ...f, seats: updatedSeats };
            }
            return f;
        });

        setFlights(updatedFlights);
        setBookings([...bookings, bookingData]);
        alert("Тапсырыс сәтті жасалды!");
        navigate("/");
    };

    if (loading) return <div>Loading flight details...</div>;
    if (!flight) return <div>Flight not found!</div>;

    return (
        <div>
            <h1>Flight Booking</h1>
            <h2>{flight.from} to {flight.to} - {flight.price}</h2>
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
                        max="50"
                        required
                    />
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '300px', margin: '20px auto' }}>
                    {flight.seats.map((seat, index) => (
                        <div
                            key={index}
                            onClick={() => toggleSeat(index)}
                            style={{
                                width: '40px',
                                height: '40px',
                                margin: '5px',
                                textAlign: 'center',
                                lineHeight: '40px',
                                borderRadius: '6px',
                                backgroundColor: selectedSeats.includes(index)
                                    ? 'green'
                                    : seat ? 'gray' : '#ddd',
                                cursor: seat ? 'not-allowed' : 'pointer',
                                color: seat ? 'white' : 'black',
                                fontWeight: 'bold'
                            }}
                            title={seat ? `Booked by ${seat}` : `Seat ${index + 1}`}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>

                <button type="submit">Book Flight</button>
            </form>
        </div>
    );
};

export default FlightBooking;
