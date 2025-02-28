import { PianoKeyItem } from '../PianoKeyItem/PianoKeyItem';
import { PianoKeyType } from '@/types/PianoKeyType';
import cn from 'classnames';
import cls from './PianoKeyList.module.scss';

interface PianoKeyListProps {
    className?: string;
    pianoKeys: PianoKeyType[]
}

export const PianoKeyList = ({ className, pianoKeys }: PianoKeyListProps) => {
  return (
    <ul className={cn(cls.list, className)}>
      {pianoKeys.map((key) => (
        <PianoKeyItem
          key={key.keyCode}
          id={key.id}
          noteName={key.noteName}
          keyCodeRus={key.keyCodeRus}
          keyCode={key.keyCode}
          file={key.file}
          octave={key.octave}
        />
      ))}
    </ul>
  );
};
