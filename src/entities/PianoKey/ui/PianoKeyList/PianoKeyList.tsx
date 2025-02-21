import { PianoKeyItem } from '../PianoKeyItem/PianoKeyItem';
import { NOTES } from '../../model/const/PianoKeyConst';
import cn from 'classnames';
import cls from './PianoKeyList.module.scss';

interface PianoKeyListProps {
  className?: string;
}

export const PianoKeyList = ({ className }: PianoKeyListProps) => {
  return (
    <ul className={cn(cls.list, className)}>
      {NOTES.map((note) => (
        <PianoKeyItem
          key={note.keyCode}
          id={note.id}
          noteName={note.noteName}
          keyName={note.keyName}
          keyCode={note.keyCode}
          file={note.file}
        />
      ))}
    </ul>
  );
};
