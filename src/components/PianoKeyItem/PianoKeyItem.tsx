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
    keyName,
    keyCode,
    file,
    isBlack = false,
  } = props;

  const keyRef = useRef<HTMLAudioElement | null>(null);
  const [ isKeyUp, setKeyUp ] = useState(true);
  const [ isBlocked, setBlocked ] = useState(false);

  const onPlayClick = (evt: SyntheticEvent<EventTarget>) => {
    console.log('target', evt.target);
    console.log('currentTarget', evt.currentTarget);
    if (!(evt.currentTarget instanceof HTMLButtonElement)) {
      return;
    }

    console.log(evt.currentTarget.dataset.note);
    if (evt.currentTarget.dataset.note === noteName) {
      if (keyRef.current) {
        console.log(keyRef.current);
        keyRef.current.currentTime = 0.0;
        keyRef.current.play();
      }
    }
  };

  const onPlayKeyUp = (evt: KeyboardEvent) => {
    if (evt.key === keyCode && keyRef.current) {
      console.log('keyup');
      setKeyUp(true);
    }
  };

  const onPlayKeyDown = (evt: KeyboardEvent) => {
    console.log('keydown', isBlocked);
    console.log(evt.key);

    if (!isKeyUp || isBlocked) {
      console.log(isBlocked, 'blocked');
      return;
    }

    if (evt.key === keyCode && keyRef.current) {
      keyRef.current.currentTime = 0.0;
      keyRef.current.play();
      setKeyUp(false);
      setBlocked(true);
      console.log(keyRef.current.duration, isBlocked);

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
        className={cn(cls.button, { [`${cls['button--black']}`]: isBlack })}
        data-note={noteName}
        type='button'
        onClick={onPlayClick}
      >
        <span
          className={cn(cls['key-name'], {
            [`${cls['key-name--black']}`]: isBlack,
          })}
        >
          {keyName}
        </span>
        <span className={cls['note-name']}>{noteName}</span>
      </button>
    </li>
  );
};
