import cls from './MainPage.module.scss';
import { PianoKey } from '@/entities/PianoKey';

const MainPage = () => {

  return (
    <div className={cls.page}>
      <div className={cls['nav-wrapper']}>
        <div>
          <div>Йа страниццццО</div>
          <PianoKey id='1' keyCode='1' keyName='A' noteName='до' src=''/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
