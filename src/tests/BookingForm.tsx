import React, { useState } from "react";
import "./BookingForm.css"; // Import the CSS file

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (formData.guests < 1) newErrors.guests = "Guests must be at least 1";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      alert("Booking successful!");
      setFormData({ name: "", email: "", date: "", time: "", guests: 1 });
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form" className="booking-form">
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>

      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>

      <label>
        Date:
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
        {errors.date && <span className="error">{errors.date}</span>}
      </label>

      <label>
        Time:
        <input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          required
        />
        {errors.time && <span className="error">{errors.time}</span>}
      </label>

      <label>
        Guests:
        <input
          type="number"
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
          min="1"
          required
        />
        {errors.guests && <span className="error">{errors.guests}</span>}
      </label>

      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
