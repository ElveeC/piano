import { Octave } from '../Octave/Octave';
import cn from 'classnames';
import cls from './OctaveList.module.scss';

interface OctaveListProps {
  className?: string;
}

export const OctaveList = ({ className }: OctaveListProps) => {
  return (
    <ul className={cn(cls.list, className)}>
      <Octave octave={0} />
      <Octave octave={1} />
      <Octave octave={2} />
    </ul>
  );
};
