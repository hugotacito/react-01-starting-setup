import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("rendes posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => {
        return [{ title: "First Post", id: "p1" }];
      },
    });
    render(<Async />);
    const listitemElements = await screen.findAllByRole("listitem");
    expect(listitemElements).not.toHaveLength(0);
  });
});
