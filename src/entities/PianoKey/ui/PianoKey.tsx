//import cls from './PianoKey.module.scss';
import { PianoKeyType } from '../model/PianoKeyType';

interface PianoKeyProps extends PianoKeyType{
  className?: string;
}

export const PianoKey = ({ className, noteName }: PianoKeyProps) => {

  return (
    <div className={className}>
      {noteName}
    </div>
  );
};
