import { render, screen } from "@testing-library/react";
import Greeting from "./greeting";

describe("Greeting component", () => {
  test("renders Hello world as a text", () => {
    render(<Greeting />);
    const heading = screen.getByText("Hello World!");
    expect(heading).toBeInTheDocument();
  });
  test("renders 'Its good to see you' if button NOT clicked", () => {
    render(<Greeting />);
    const paragraph = screen.getByText("It's good to see you!");
    expect(paragraph).toBeInTheDocument();
  });
  test("renders 'Changed!' if button WAS clicked", () => {
    render(<Greeting />);

    const button = screen.getByText("Change Text!");
    button.click();

    const paragraph = screen.getByText("Changed!");
    expect(paragraph).toBeInTheDocument();
  });
  test("do not render 'Its good to see you' if button NOT clicked", () => {
    render(<Greeting />);

    const button = screen.getByText("Change Text!");
    button.click();
    const paragraph = screen.queryByText("It's good to see you!");
    expect(paragraph).toBeNull();
  });
});
