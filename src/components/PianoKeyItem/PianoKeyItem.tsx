import { useRef, useEffect, useState, SyntheticEvent } from 'react';
import { PianoKeyType } from '@/types/PianoKeyType';
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

  const keyRef = useRef<HTMLAudioElement | null>(null);
  const [ isKeyUp, setKeyUp ] = useState(true);
  const [ isBlocked, setBlocked ] = useState(false);
  const [ isActive, setActive ] = useState(false);

  const onPlayClick = (evt: SyntheticEvent<EventTarget>) => {
    if (!(evt.currentTarget instanceof HTMLButtonElement)) {
      return;
    }

    if (keyRef.current) {
      keyRef.current.currentTime = 0.0;
      keyRef.current.play();
    }
  };

  const onPlayKeyUp = (evt: KeyboardEvent) => {
    if (
      (evt.key.toLocaleLowerCase() === keyCode.toLocaleLowerCase() ||
        evt.key.toLocaleLowerCase() === keyCodeRus.toLocaleLowerCase()) &&
      keyRef.current
    ) {
      setActive(false);
      setKeyUp(true);
    }
  };

  const onPlayKeyDown = (evt: KeyboardEvent) => {
    if (!isKeyUp || isBlocked) {
      return;
    }

    if ((evt.key === keyCode || evt.key === keyCodeRus) && keyRef.current) {
      keyRef.current.currentTime = 0.0;
      keyRef.current.play();
      setActive(true);
      setKeyUp(false);
      setBlocked(true);

      setTimeout(() => {
        setBlocked(false);
      }, 200);
    }
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      document.addEventListener('keyup', onPlayKeyUp);
      return () => {
        document.removeEventListener('keyup', onPlayKeyUp);
      };
    }
    return () => {
      isMounted = false;
    };
  }, [ onPlayKeyUp ]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      document.addEventListener('keydown', onPlayKeyDown);
      return () => {
        document.removeEventListener('keydown', onPlayKeyDown);
      };
    }
    return () => {
      isMounted = false;
    };
  }, [ onPlayKeyDown ]);

  return (
    <li className={cn(cls.item, className)}>
      <audio ref={keyRef} src={`../../../src/assets/sounds/${file}`}></audio>
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
