import { TUBE_LINE_COLORCODES } from "../constants/index";
import { TubeLine } from "../types";
/**
 * Sorts TubeLine objects by the severity of their first line status.
 * Lower statusSeverity values are sorted before higher ones.
 *
 * @param a - The first TubeLine object to compare.
 * @param b - The second TubeLine object to compare.
 * @returns -1 if a < b, 1 if a > b, 0 if equal.
 */
export const sortBytstatusSeverity = (a: TubeLine, b: TubeLine) => {
  if (a.lineStatuses[0].statusSeverity < b.lineStatuses[0].statusSeverity) {
    return -1;
  }
  if (a.lineStatuses[0].statusSeverity > b.lineStatuses[0].statusSeverity) {
    return 1;
  }
  return 0;
};
/**
 * Returns the CSS color class for a given tube line ID.
 * If the tube line ID is not found, returns a default color class.
 *
 * @param tubeId - The ID of the tube line.
 * @returns The CSS class string for the tube line color.
 */
export const getColorClass = (tubeId: string) => {
  const record = TUBE_LINE_COLORCODES.find((items) => {
    return items.id === tubeId;
  });
  return record?.color || "bg-color-red";
};
