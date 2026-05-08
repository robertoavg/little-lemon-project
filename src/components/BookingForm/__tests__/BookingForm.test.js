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
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />,
    );

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should dispatch update times when date changes", () => {
    const dispatchMock = jest.fn();
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatchMock}
        submitForm={jest.fn()}
      />,
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-04-07" },
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      date: new Date("2026-04-07"),
    });
  });

  it("should prevent submission when required fields are empty", () => {
    const submitFormMock = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={jest.fn()}
        submitForm={submitFormMock}
      />,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(submitFormMock).not.toHaveBeenCalled();

    const form = screen.getByRole("form");
    expect(form.checkValidity()).toBe(false);
  });

  it("should disable past and current time options for today", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />,
    );

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

  it("should call submitAPI on successful submission", () => {
    const submitAPI_mock = jest.fn().mockResolvedValue(true);
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={jest.fn()}
        submitForm={submitAPI_mock}
      />,
    );

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

    fireEvent.click(screen.getByRole("button"));

    expect(submitAPI_mock).toHaveBeenCalledWith({
      date: "2026-04-08",
      time: "15:00",
      guests: 4,
      occasion: "anniversary",
    });
  });
});
