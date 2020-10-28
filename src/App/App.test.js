import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./App";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("App", () => {
  beforeEach(() => {
    const history = createMemoryHistory();

    render(<Router history={history}><App /></Router>)
  });

  it("should render the Home component on load", () => {
    expect(screen.getByText("by Leta Keane")).toBeInTheDocument();
  });

  it('should switch to the first scenario when "Begin" Link is clicked', () => {
    const beginLink = screen.getByText("Begin");

    userEvent.click(beginLink);

    expect(screen.getByText("You wake up out of a dead sleep.")).toBeInTheDocument();
  });

  it("should switch to next scenario when scenario option is clicked", () => {
    const beginLink = screen.getByText("Begin");

    userEvent.click(beginLink);

    const optionLink = screen.getByText("It was a noise, somewhere in the house.");

    userEvent.click(optionLink);

    expect(screen.getByText("With the rememberance, your heart starts racing.")).toBeInTheDocument();
  });
});
