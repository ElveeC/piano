import { useRef } from 'react';
import { PianoKeyType } from '@/types/PianoKeyType';
import { usePianoKey } from '@/hooks/usePianoKey';
import cn from 'classnames';
import cls from './PianoKeyItem.module.scss';

interface PianoKeyItemProps extends PianoKeyType {
  className?: string;
  isBlack?: boolean;
}

export const PianoKeyItem = (props: PianoKeyItemProps) => {
  const {
    className,
    noteName,
    keyCode,
    keyCodeRus,
    file,
    isBlack = false,
  } = props;

  const keyRef = useRef<HTMLAudioElement | null>(null)

  const { onPlayClick, isActive } = usePianoKey(keyCode, keyCodeRus, keyRef);


  return (
    <li className={cn(cls.item, className)}>
      <audio ref={keyRef} src={`../../assets/sounds/${file}`}></audio>
      <button
        className={cn(
          cls.button,
          { [`${cls['button--black']}`]: isBlack },
          { [`${cls['button--active']}`]: isActive },
          { [`${cls['button--black-active']}`]: isActive && isBlack }
        )}
        data-note={noteName}
        type='button'
        onClick={onPlayClick}
      >
        <span
          className={cn(cls['key-name'], {
            [`${cls['key-name--black']}`]: isBlack,
          })}
        >
          {keyCode}
        </span>
        <span className={cls['note-name']}>{noteName}</span>
      </button>
    </li>
  );
};
