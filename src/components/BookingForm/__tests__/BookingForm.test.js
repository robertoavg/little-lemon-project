import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "../BookingForm";

describe("BookingForm", () => {
  const availableTimes = ["13:00", "14:00", "15:00", "18:00"];
  let alertSpy;

  beforeEach(() => {
    alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-04-07T14:00:00"));
  });

  afterEach(() => {
    alertSpy.mockRestore();
    jest.useRealTimers();
  });

  it("should render booking form fields", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={jest.fn()} />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /make your reservation/i })).toBeInTheDocument();
  });

  it("should dispatch update times when date changes", () => {
    const dispatchMock = jest.fn();
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatchMock} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-04-07" },
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      date: "2026-04-07",
    });
  });

  it("should show validation alert when submitting with missing fields", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={jest.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

    expect(alertSpy).toHaveBeenCalledWith("Please fill in all fields before submitting.");
  });

  it("should disable past and current time options for today", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-04-07" },
    });

    const options = screen.getAllByRole("option");
    const optionValues = options.map((option) => ({
      value: option.value,
      disabled: option.disabled,
    }));

    expect(optionValues).toContainEqual({ value: "13:00", disabled: true });
    expect(optionValues).toContainEqual({ value: "14:00", disabled: true });
    expect(optionValues).toContainEqual({ value: "15:00", disabled: false });
  });

  it("should show invalid time alert when selecting today and time is not valid", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-04-07" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "14:00" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "birthday" },
    });

    fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

    expect(alertSpy).toHaveBeenCalledWith("Please select a valid time.");
  });

  it("should show booking details alert on successful submission", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-04-08" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "15:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "anniversary" },
    });

    fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

    expect(alertSpy).toHaveBeenCalledWith(
      "Booking Details:\nDate: 2026-04-08\nTime: 15:00\nGuests: 4\nOccasion: anniversary"
    );
  });
});
