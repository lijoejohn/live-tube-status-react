import { render, screen } from "@testing-library/react";
import TubeLineStatusContainer from "components/tubeLineStatus/TubeLineStatusContainer";
import { lineStatus } from "../mocks//linestatus";

jest.mock("../../hooks/useFecthTubeStatus");

const mockUseFecthTubeStatus =
  require("../../hooks/useFecthTubeStatus").default;

describe("TubeLineStatusContainer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loader when loading", () => {
    mockUseFecthTubeStatus.mockReturnValue([true, undefined, false]);
    render(<TubeLineStatusContainer />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders TubeLineStatusList when data is present", () => {
    mockUseFecthTubeStatus.mockReturnValue([false, lineStatus, false]);
    render(<TubeLineStatusContainer />);
    expect(
      screen.getByText(/Bakerloo\s*:\s*Good Service/i)
    ).toBeInTheDocument();
    const elements = screen.getAllByText(
      "Piccadilly Line: Minor delays between Acton Town and Uxbridge due to an earlier faulty train. GOOD SERVICE on the rest of the line."
    );
    expect(elements.length).toBeGreaterThan(0);
  });

  it.only("renders error when error is present", () => {
    mockUseFecthTubeStatus.mockReturnValue([
      false,
      undefined,
      new Error("fail"),
    ]);
    render(<TubeLineStatusContainer />);
    expect(
      screen.getByText("Sorry, there was a problem loading the tube status.")
    ).toBeInTheDocument();
  });

  it("renders header and footer always", () => {
    mockUseFecthTubeStatus.mockReturnValue([false, undefined, false]);
    render(<TubeLineStatusContainer />);
    expect(screen.getByText("Transport for London")).toBeInTheDocument();
    expect(screen.getByText("Built with GOV.UK Frontend")).toBeInTheDocument();
  });
});
