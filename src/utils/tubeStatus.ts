import { TUBE_LINE_COLORCODES } from "../constants/index";
import { TubeLine } from "../types";
export const sortBytstatusSeverity = (a: TubeLine, b: TubeLine) => {
  if (a.lineStatuses[0].statusSeverity < b.lineStatuses[0].statusSeverity) {
    return -1;
  }
  if (a.lineStatuses[0].statusSeverity > b.lineStatuses[0].statusSeverity) {
    return 1;
  }
  return 0;
};

export const getColorClass = (tubeId: string) => {
  const record = TUBE_LINE_COLORCODES.find((items) => {
    return items.id === tubeId;
  });
  return record?.color || "bg-color-red";
};
