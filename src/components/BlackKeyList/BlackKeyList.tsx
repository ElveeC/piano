import { PianoKeyItem } from '../PianoKeyItem/PianoKeyItem';
import { PianoKeyType } from '@/types/PianoKeyType';
import cn from 'classnames';
import cls from './BlackKeyList.module.scss';

interface BlackKeyListProps {
    className?: string;
    pianoKeys: PianoKeyType[]
}

export const BlackKeyList = ({ className, pianoKeys }: BlackKeyListProps) => {
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
          isBlack={true}
          className={cls.item}
        />
      ))}
    </ul>
  );
};
