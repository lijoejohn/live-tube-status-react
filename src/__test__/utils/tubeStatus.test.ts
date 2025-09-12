import { sortBytstatusSeverity, getColorClass } from "../../utils/tubeStatus";

describe("sortBytstatusSeverity", () => {
  it("sorts TubeLine objects by statusSeverity ascending", () => {
    const a = { lineStatuses: [{ statusSeverity: 5 }] } as any;
    const b = { lineStatuses: [{ statusSeverity: 10 }] } as any;
    const c = { lineStatuses: [{ statusSeverity: 5 }] } as any;

    expect(sortBytstatusSeverity(a, b)).toBe(-1);
    expect(sortBytstatusSeverity(b, a)).toBe(1);
    expect(sortBytstatusSeverity(a, c)).toBe(0);
  });
});

describe("getColorClass", () => {
  it("returns the correct color for a known tubeId", () => {
    expect(getColorClass("bakerloo")).toBe("bg-color-bakerloo");
    expect(getColorClass("central")).toBe("bg-color-central");
  });

  it("returns default color for unknown tubeId", () => {
    expect(getColorClass("unknown")).toBe("bg-color-red");
  });
});
