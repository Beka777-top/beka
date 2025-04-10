import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "./FlightContext";

function FlightList() {
    const { flights } = useContext(FlightContext);
    const [search, setSearchTerm] = useState("");
    const [filteredFlights, setFilteredFlights] = useState(flights);

    const navigate = useNavigate();

    useEffect(() => {
        filterFlights();
    }, [search, flights]);

    const filterFlights = () => {
        const filtered = flights.filter(flight =>
            flight.from.toLowerCase().includes(search.toLowerCase()) ||
            flight.to.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredFlights(filtered);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFlightClick = (id) => {
        navigate(`/flight-booking/${id}`);
    };

    if (!flights.length) {
        return <div>Loading flights...</div>;
    }

    return (
        <div>
            <h1>Flight List</h1>
            <input
                type="text"
                placeholder="Search flights..."
                value={search}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredFlights.length > 0 ? (
                    filteredFlights.map(flight => (
                        <li key={flight.id} onClick={() => handleFlightClick(flight.id)}>
                            <strong>{flight.from}</strong> to <strong>{flight.to}</strong> - {flight.price} ({flight.airline})
                        </li>
                    ))
                ) : (
                    <li>No flights found</li>
                )}
            </ul>
        </div>
    );
}

export default FlightList;