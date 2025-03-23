import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";

test("renders the booking form", () => {
  render(<BookingForm onSubmit={jest.fn()} />);
  expect(screen.getByRole("form", { name: "Booking Form" })).toBeInTheDocument();
});

test("validates required fields", () => {
  render(<BookingForm onSubmit={jest.fn()} />);
  
  fireEvent.click(screen.getByText("Book Now"));
  
  expect(screen.getByText("Name is required")).toBeInTheDocument();
  expect(screen.getByText("Invalid email")).toBeInTheDocument();
  expect(screen.getByText("Date is required")).toBeInTheDocument();
  expect(screen.getByText("Time is required")).toBeInTheDocument();
  expect(screen.getByText("Guests must be at least 1")).toBeInTheDocument();
});
