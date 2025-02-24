import { PIANO_KEYS } from '@/const';
import { PianoKeyList } from '../PianoKeyList/PianoKeyList';
import { PianoKeyType } from '@/types/PianoKeyType';
import cn from 'classnames';
import cls from './Octave.module.scss';


interface OctaveProps {
  className?: string;
  octave: number;
}

export const Octave = ({ className, octave }: OctaveProps) => {

  const filterKeys = (keys: PianoKeyType[], octaveNumber: number) =>
    keys.filter((key) => key.octave === octaveNumber);
    
  const keys= filterKeys(PIANO_KEYS, octave);
  
  return (
    <li className={cn(cls.item, className)}>
      <PianoKeyList pianoKeys={keys}/>
    </li>
  );
};
