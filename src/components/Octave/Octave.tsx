import { PIANO_KEYS, BLACK_KEYS } from '@/const';
import { PianoKeyList } from '../PianoKeyList/PianoKeyList';
import { PianoKeyType } from '@/types/PianoKeyType';
import cn from 'classnames';
import cls from './Octave.module.scss';
import { BlackKeyList } from '../BlackKeyList/BlackKeyList';


interface OctaveProps {
  className?: string;
  octave: number;
}

export const Octave = ({ className, octave }: OctaveProps) => {

  const filterKeys = (keys: PianoKeyType[], octaveNumber: number) =>
    keys.filter((key) => key.octave === octaveNumber);
    
  const keys= filterKeys(PIANO_KEYS, octave);
  const blackKeys = filterKeys(BLACK_KEYS, octave);
  
  return (
    <li className={cn(cls.item, className)}>
      <BlackKeyList pianoKeys={blackKeys}/>
      <PianoKeyList pianoKeys={keys}/>
    </li>
  );
};
