/**
 * Array of objects mapping Tube line IDs to their corresponding CSS color classes.
 * Used to assign background color classes for each Tube line in the UI.
 *
 * Each object contains:
 *   - id: The unique string identifier for the Tube line.
 *   - color: The CSS class string for the Tube line's background color.
 */ const TUBE_LINE_COLORCODES = [
  { id: "bakerloo", color: "bg-color-bakerloo" },
  { id: "central", color: "bg-color-central" },
  { id: "circle", color: "bg-color-circle" },
  { id: "district", color: "bg-color-district" },
  { id: "hammersmith-city", color: "bg-color-hammersmith" },
  { id: "jubilee", color: "bg-color-jubilee" },
  { id: "metropolitan", color: "bg-color-metropolitan" },
  { id: "northern", color: "bg-color-northern" },
  { id: "piccadilly", color: "bg-color-piccadilly" },
  { id: "victoria", color: "bg-color-victoria" },
  { id: "waterloo-city", color: "bg-color-waterloo" },
  { id: "overground", color: "bg-color-overground" },
  { id: "liberty", color: "bg-color-liberty" },
  { id: "mildmay", color: "bg-color-mildmay" },
  { id: "weaver", color: "bg-color-weaver" },
  { id: "windrush", color: "bg-color-windrush" },
  { id: "lioness", color: "bg-color-lioness" },
  { id: "suffragette", color: "bg-color-suffragette" },
  { id: "elizabeth-line", color: "bg-color-elizabeth-line" },
  { id: "dlr", color: "bg-color-dlr" },
  { id: "tram", color: "bg-color-tram" },
];

export { TUBE_LINE_COLORCODES };
