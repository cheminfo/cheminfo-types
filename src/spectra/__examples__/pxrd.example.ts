import { DataColumn } from "../core/DataColumn";

export const PxrdDefaultColumns: Array<DataColumn> = [
  {
    abbreviation: "x",
    unit: "°",
    /**twice the Bragg angle*/
    name: "2θ",
    variableType: "INDEPENDENT",
  },
  {
    abbreviation: "y",
    unit: "",
    name: "intensity",
    variableType: "DEPENDENT",
  },
];
