import { OneLetter } from "../../src";

export type VariablesRecord<DataType, Obligatory extends string = 'x' | 'y'> = Partial<Record<OneLetter, DataType>> & Record<Obligatory, DataType>;
