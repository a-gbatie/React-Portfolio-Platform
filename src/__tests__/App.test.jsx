// @vitest-environment jsdom

import { test, expect, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "../App";

afterEach(() => {
    cleanup();
});

test("renders the initial three projects", () => {
  render(<App />);

  expect(screen.getByText("Personal Website")).toBeInTheDocument();
  expect(screen.getByText("Weather App")).toBeInTheDocument();
  expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
});

test("adds a new project through the form", () => {
  render(<App />);

  const titleInput = screen.getByLabelText("Title:");
  const descriptionInput = screen.getByLabelText("Description:");
  const addButton = screen.getByRole("button", { name: "Add"});

  fireEvent.change(titleInput, {
    target: { value: "React Portfolio" },
  });

  fireEvent.change(descriptionInput, {
    target: { value: "My personal portfolio website" },
  });

  fireEvent.click(addButton);

  expect(screen.getByText("React Portfolio")).toBeInTheDocument();
  expect(
    screen.getByText("My personal portfolio website")
  ).toBeInTheDocument();
});

test("does not add a project with only whitespace", () => {
  render(<App />);

  const titleInput = screen.getByLabelText("Title:");
  const descriptionInput = screen.getByLabelText("Description:");
  const addButton = screen.getByRole("button", {
    name: "Add",
  });

  fireEvent.change(titleInput, {
    target: { value: "   " },
  });

  fireEvent.change(descriptionInput, {
    target: { value: "Test description" },
  });

  fireEvent.click(addButton);

  expect(document.querySelectorAll(".project-card")).toHaveLength(3);
});

test("filters projects by title", () => {
  render(<App />);

  const searchInput = screen.getByLabelText("Search Projects");

  fireEvent.change(searchInput, {
    target: { value: "weather" },
  });

  expect(screen.getByText("Weather App")).toBeInTheDocument();

  expect(
    screen.queryByText("Personal Website")
  ).not.toBeInTheDocument();

  expect(
    screen.queryByText("Shopping Cart")
  ).not.toBeInTheDocument();
});