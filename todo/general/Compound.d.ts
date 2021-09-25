import { HTMLString } from './HtmlString';
import { Value } from './Value';

/* Describes a chemical compound in general  */
export interface Compound {
  /**  molecular formula
   * @TJS-examples ["C6H6", "H2O", "N2", "CH3CH2OH"]
   */
  mf: string;
  /* broad classification of the compound class*/
  kind?:
    | 'catalyst'
    | 'buffer'
    | 'cellline'
    | 'RNA'
    | 'DNA'
    | 'molecule'
    | 'peptide'
    | 'protein'
    | 'material'
    | 'MOF'
    | 'zeolite';
  description?: HTMLString;
  ocl?: OCLObject;
  /**
   * @TJS-examples ["Ethyl benzene", "Acetic acid"]
   */
  title?: string;
  /**
   * Simplified Molecular-Input Line-Entry System (SMILES) computed from chemical structure.
   * @TJS-examples ["C1=CC=C(C=C1)C=O"]
   */
  smiles?: string;
  /**
   * International Chemical Identifier hash (InChIKey) computed from chemical structure using the International Union of Pure and Applied Chemistry (IUPAC) standard.
   * @TJS-examples ["LFQSCWFLJHTTHZ-UHFFFAOYSA-N"]
   */
  inchiKey?: string;
  name?: Array<ChemicalName>;
  /**
   * mass fraction purity calculated as (mass pure product) / (mass impure product)
   * or concentration of a dissolved species
   */
  purity?: Value;
  /** Molecular weight */
  mw?: Value;
  /** Exact mass */
  em?: Value;
  /**Keywords related to the chemical
   * @TJS-examples [{doi: '10./123'}]
   */
  keywords?: Array<{ kind: string; value: string }>;
  /**
   * MIME: chemical/x-mdl-molfile
   * @TJS-examples ["\nActelion Java MolfileCreator 2.0\n\n  0  0  0  0  0  0              0 V3000\nM  V30 BEGIN CTAB\nM  V30 COUNTS 8 8 0 0 0\nM  V30 BEGIN ATOM\nM  V30 1 C 21.7482 -12.5547 0 0\nM  V30 2 C 20.437 -11.7869 0 0\nM  V30 3 C 21.7364 -14.0431 0 0\nM  V30 4 C 23.0358 -11.7869 0 0\nM  V30 5 C 19.1258 -12.5193 0 0\nM  V30 6 C 20.4252 -14.7755 0 0\nM  V30 7 C 24.3234 -12.5193 0 0\nM  V30 8 C 19.114 -14.0077 0 0\nM  V30 END ATOM\nM  V30 BEGIN BOND\nM  V30 1 2 1 2\nM  V30 2 1 1 3\nM  V30 3 1 1 4\nM  V30 4 1 2 5\nM  V30 5 2 3 6\nM  V30 6 1 4 7\nM  V30 7 2 5 8\nM  V30 8 1 6 8\nM  V30 END BOND\nM  V30 END CTAB\nM  END\n"]
   * */
  molfile?: string;
}
/*
[OpenChemLib](https://github.com/cheminfo/openchemlib-js) object
*/
export interface OCLObject {
  /**
   * @TJS-examples ['!B|Kq~_{^||Kwpo[^}_g|']
   */
  coordinates: string;
  /**
   * @TJS-examples [[1099173888,8192,0,128,-2147483648,0,0,4,0,0,0,0,0,0,0,0]]
   */
  index: Array<number>;
  /**
   * @TJS-examples ['daD@@DjUZxHH@@']
   */
  value: string;
}

export interface ChemicalName {
  /**  If true, then name is IUPAC name
   * @TJS-examples [true, false]
   */
  iupac: boolean;
  /**
   * language of the name, indicated using the [ISO 2-letter code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * @TJS-examples ['en']
   */
  language: string;
  /**
   * name of the chemical
   * @TJS-examples ['Ethyl benzene']
   */
  value: string;
}
