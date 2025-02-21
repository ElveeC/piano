import { useRef, useEffect, useState, SyntheticEvent } from 'react';
import { PianoKeyType } from '../../model/types/PianoKeyType';
import cn from 'classnames';
import cls from './PianoKeyItem.module.scss';

interface PianoKeyItemProps extends PianoKeyType{
  className?: string;
}

export const PianoKeyItem = ({ className, noteName, keyCode, file }: PianoKeyItemProps) => {

  const keyRef = useRef<HTMLAudioElement | null>(null);
  const [ isKeyUp, setKeyUp ] = useState(true);
  const [ isBlocked, setBlocked ] = useState(false);

  const onPlayClick = (evt: SyntheticEvent<EventTarget>) => {
    if (!(evt.target instanceof HTMLButtonElement)) {
      return;
    }

    console.log(evt.target.dataset.note);
    if (evt.target.dataset.note === noteName) {
      if (keyRef.current) {
        console.log(keyRef.current);
        keyRef.current.currentTime = 0.0;
        keyRef.current.play();
      }
    }
  };

  const onPlayKeyUp = (evt: KeyboardEvent) => {
    if (evt.code === keyCode && keyRef.current) {
      console.log('keyup');
      setKeyUp(true);
    }
  };
 
  const onPlayKeyDown = (evt: KeyboardEvent) => {
    console.log('keydown', isBlocked);
    console.log(evt.code);

    if (!isKeyUp || isBlocked) {
      console.log(isBlocked, 'blocked');
      return;
    }

    if (evt.code === keyCode && keyRef.current) {
      keyRef.current.currentTime = 0.00;
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
      <audio ref={keyRef} src={`../../../src/shared/assets/sounds/${file}`}></audio>
      <button
        className={cls.button}
        data-note={noteName} type='button' onClick={onPlayClick}>
        {noteName}
      </button>
    </li>
  );
};
