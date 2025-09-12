import { render, screen, fireEvent } from "@testing-library/react";
import { TubeLineStatusColumn } from "components/tubeLineStatus/TubeLineStatusColumn";

const mockLines = [
  {
    id: "bakerloo",
    name: "Bakerloo",
    lineStatuses: [
      {
        statusSeverityDescription: "Good Service",
        reason: undefined,
      },
    ],
  },
  {
    id: "piccadilly",
    name: "Piccadilly Line",
    lineStatuses: [
      {
        statusSeverityDescription: "Minor Delays",
        reason: "Sample reason",
      },
    ],
  },
];

jest.mock("../../utils/tubeStatus", () => ({
  getColorClass: (id: string) => `color-${id}`,
}));

describe("TubeLineStatusColumn", () => {
  it("renders tube lines with and without reasons", () => {
    render(<TubeLineStatusColumn lines={mockLines as any} />);
    // Good Service (no reason) renders as span
    expect(screen.getByText(/Bakerloo\s*:\s*Good Service/i).tagName).toBe(
      "SPAN"
    );
    // Minor Delays (with reason) renders as details/summary
    expect(
      screen.getByText(/Piccadilly Line\s*:\s*Minor Delays/i).tagName
    ).toBe("SUMMARY");
    // Reason is present but hidden until details is opened
    const details = screen
      .getByText(/Piccadilly Line\s*:\s*Minor Delays/i)
      .closest("details");
    expect(details).not.toHaveAttribute("open");
  });

  it("shows reason when details is opened", () => {
    render(<TubeLineStatusColumn lines={mockLines as any} />);
    const summary = screen.getByText(/Piccadilly Line\s*:\s*Minor Delays/i);
    // Click to open details
    fireEvent.click(summary);
    // Now the reason should be visible
    expect(screen.getAllByText(/Sample reason/i)[0]).toBeVisible();
  });

  it("renders visually hidden span for screen readers", () => {
    render(<TubeLineStatusColumn lines={mockLines as any} />);
    expect(screen.getAllByText("Sample reason")[1]).toHaveClass(
      "govuk-visually-hidden"
    );
  });
});
