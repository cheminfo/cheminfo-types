import { Display } from '../Display';

interface LoadedFiles {
  name: string;
  extension?: string;
  binary: string | ArrayBuffer;
}

interface Source {
  jcampURL?: string;
  file?: LoadedFiles;
}

export interface Spectrum {
  id: string | number;
  source?: Source;
  display: Display;
  meta: any;
}
