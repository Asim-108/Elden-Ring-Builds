import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("Check if main choose build section is in website", () => {
  render(<App />);
  const chooseBuildSection = screen.getByText(/Choose Build/i);
  expect(chooseBuildSection).toBeInTheDocument();
});

test("Check if right weapons are being displayed for Strength", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Strength/i));
  const gutsSword = screen.getByText(/Guts Greatsword/i);
  expect(gutsSword).toBeInTheDocument();
  const giantCrusher = screen.getByText(/Giant Crusher/i);
  expect(giantCrusher).toBeInTheDocument();
  const maraisSword = screen.getByText(/Marais Executioner's Sword/i);
  expect(maraisSword).toBeInTheDocument();
});

test("Check if right weapons are being displayed for Dexterity", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Dexterity/i));
  const handOfMalenia = screen.getByText(/Hand of Malenia/i);
  expect(handOfMalenia).toBeInTheDocument();
  const uchigatana = screen.getByText(/Uchigatana/i);
  expect(uchigatana).toBeInTheDocument();
  const boltOfGransax = screen.getByText(/Bolt of Gransax/i);
  expect(boltOfGransax).toBeInTheDocument();
});
