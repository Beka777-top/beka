import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightBooking from "./FlightBooking";
import { FlightProvider } from "./FlightContext";
import FlightList from "./FlightList";
import './style.css';

export default function App() {
    return (
        <FlightProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FlightList />} />
                    <Route path="/flight-booking/:flightId" element={<FlightBooking />} />
                </Routes>
            </BrowserRouter>
        </FlightProvider>
    );
}