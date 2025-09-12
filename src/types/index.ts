export type LineStatuses = {
  id: number;
  statusSeverity: number;
  statusSeverityDescription: string;
  reason?: string;
};

export type TubeLine = {
  id: string;
  name: string;
  modeName: string;
  lineStatuses: LineStatuses[];
};
