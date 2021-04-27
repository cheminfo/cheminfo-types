import { DataColumn } from "../measurementResult";
export const PxrdDefaultColumns: Array<DataColumn> = [
  {
    abbreviation: "x",
    unit: "ev",
    name: "kineticEnergy",
    variableType: "INDEPENDENT",
  },
  {
    abbreviation: "y",
    unit: "cps",
    name: "intensity",
    variableType: "DEPENDENT",
  },
];
