import { PIANO_KEYS, BLACK_KEYS } from '@/const';
import { PianoKeyList } from '../PianoKeyList/PianoKeyList';
import cn from 'classnames';
import cls from './Octave.module.scss';
import { BlackKeyList } from '../BlackKeyList/BlackKeyList';
import { filterKeys } from '@/helpers/filterKeys';

interface OctaveProps {
  className?: string;
  octave: number;
}

export const Octave = ({ className, octave }: OctaveProps) => {

  const keys= filterKeys(PIANO_KEYS, octave);
  const blackKeys = filterKeys(BLACK_KEYS, octave);
  
  return (
    <li className={cn(cls.item, className)}>
      <BlackKeyList pianoKeys={blackKeys}/>
      <PianoKeyList pianoKeys={keys}/>
    </li>
  );
};
