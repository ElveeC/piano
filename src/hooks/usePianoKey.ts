import { useEffect, useState, SyntheticEvent, RefObject } from 'react';

export const usePianoKey = (
  keyCode: string,
  keyCodeRus: string,
  keyRef: RefObject<HTMLAudioElement | null>
) => {
  
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

  return { isActive, onPlayClick };
};
