import { DataColumn } from "../measurementResult";
export const IsothermDefaultColumns: Array<DataColumn> = [
  {
    abbreviation: "x",
    unit: "Pa",
    /**IUPAC P04819*/
    name: "absolute pressure",
    variableType: "INDEPENDENT",
  },
  {
    abbreviation: "y",
    unit: "g/kg",
    name: "excess uptake",
    variableType: "DEPENDENT",
  },
  {
    abbreviation: "p",
    unit: "",
    name: "relative pressure",
    variableType: "INDEPENDENT",
  },
];
