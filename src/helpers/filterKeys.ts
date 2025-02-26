import { PianoKeyType } from '@/types/PianoKeyType';

export const filterKeys = (keys: PianoKeyType[], octaveNumber: number) =>
  keys.filter((key) => key.octave === octaveNumber);
