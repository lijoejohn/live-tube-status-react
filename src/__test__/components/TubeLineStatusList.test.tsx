import { render, screen } from "@testing-library/react";
import { TubeLineStatusList } from "components/tubeLineStatus/TubeLineStatusList";
import { lineStatus } from "../mocks//linestatus";

describe("TubeLineStatusList", () => {
  it("renders two columns with split items", () => {
    render(<TubeLineStatusList items={lineStatus} />);
    expect(
      screen.getByText(/Bakerloo\s*:\s*Good Service/i)
    ).toBeInTheDocument();
  });

  it("renders empty state when no items", () => {
    render(<TubeLineStatusList items={[]} />);
    expect(screen.getByText("No Records Available")).toBeInTheDocument();
  });
});
