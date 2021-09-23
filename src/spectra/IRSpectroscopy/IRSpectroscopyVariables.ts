import { Variable } from '../../core/SpectrumVariable';

interface wavelengthReflectance {
  l: Variable;
  r: Variable;
}

interface wavelengthEmission {
  l: Variable;
  e: Variable;
}

interface wavelengthTransmittance {
  l: Variable;
  t: Variable;
}

interface wavelengthAdsorbance {
  l: Variable;
  a: Variable;
}

interface wavenumberAdsorbance {
  w: Variable;
  a: Variable;
}

interface wavenumberTransmittance {
  w: Variable;
  t: Variable;
}

interface wavenumberReflectance {
  w: Variable;
  r: Variable;
}

interface wavenumberEmission {
  w: Variable;
  e: Variable;
}

export type IRSpectroscopyVariables =
  | wavelengthReflectance
  | wavelengthEmission
  | wavelengthTransmittance
  | wavelengthAdsorbance
  | wavenumberAdsorbance
  | wavenumberTransmittance
  | wavenumberReflectance
  | wavenumberEmission;
