import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "../Nav";

describe("Nav", () => {
  it("should render the navigation header", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("should render the logo link with correct attributes", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    const logoLink = screen.getByRole("link", { name: /little lemon home/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
    expect(screen.getByAltText("Little Lemon logo")).toBeInTheDocument();
  });

  it("should render Home NavLink with active class when on home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Nav />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveClass("nav__link", "is-active");
  });

  it("should render Home NavLink without active class when not on home page", () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <Nav />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveClass("nav__link");
    expect(homeLink).not.toHaveClass("is-active");
  });

  it("should render Menu and About links when on home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Nav />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /menu/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });

  it("should not render Menu and About links when not on home page", () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <Nav />
      </MemoryRouter>
    );

    expect(screen.queryByRole("link", { name: /menu/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /about/i })).not.toBeInTheDocument();
  });

  it("should render Reservations NavLink with active class when on booking page", () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <Nav />
      </MemoryRouter>
    );

    const reservationsLink = screen.getByText("Reservations");
    expect(reservationsLink).toBeInTheDocument();
    expect(reservationsLink).toHaveClass("nav__link", "is-active");
  });

  it("should render Reservations NavLink without active class when not on booking page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Nav />
      </MemoryRouter>
    );

    const reservationsLink = screen.getByText("Reservations");
    expect(reservationsLink).toBeInTheDocument();
    expect(reservationsLink).toHaveClass("nav__link");
    expect(reservationsLink).not.toHaveClass("is-active");
  });

  it("should have correct aria-label for primary navigation", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    const navElement = screen.getByRole("navigation", { name: /primary/i });
    expect(navElement).toBeInTheDocument();
  });
});