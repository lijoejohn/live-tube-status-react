import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react"; // <-- import waitFor

import useFecthTubeStatus from "../../hooks/useFecthTubeStatus";

// Mock environment variables
const OLD_ENV = process.env;
beforeEach(() => {
  jest.resetModules();
  process.env = { ...OLD_ENV, BACK_END_URL: "http://mock.api", API_KEY: "123" };
});
afterAll(() => {
  process.env = OLD_ENV;
});

const mockData = [
  { id: 1, name: "Bakerloo", lineStatuses: [{ statusSeverity: 10 }] },
  { id: 2, name: "Central", lineStatuses: [{ statusSeverity: 5 }] },
];

// Mock sort function
jest.mock("../../utils/tubeStatus", () => ({
  sortBytstatusSeverity: jest.fn(() => 0),
}));

describe("useFecthTubeStatus", () => {
  it("should fetch and return data", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData),
    }) as any;

    const { result } = renderHook(() => useFecthTubeStatus());

    expect(result.current[0]).toBe(true); // loading

    await waitFor(() => {
      expect(result.current[0]).toBe(false); // loading false
    });

    expect(result.current[1]).toEqual(mockData); // data
    expect(result.current[2]).toBe(false); // error
  });

  it("should handle fetch error", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("fail")) as any;

    const { result } = renderHook(() => useFecthTubeStatus());

    await waitFor(() => {
      expect(result.current[0]).toBe(false); // loading false
    });

    expect(result.current[1]).toBeUndefined(); // data undefined
    expect(result.current[2]).toBeInstanceOf(Error); // error is set
  });
});
