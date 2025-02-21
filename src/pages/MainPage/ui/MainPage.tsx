import cls from './MainPage.module.scss';
import { PianoKeyList } from '@/entities/PianoKey';

const MainPage = () => {

  return (
    <div className={cls.page}>
      <div className={cls['nav-wrapper']}>
        <div>
          <div>Йа пианинко</div>
          <PianoKeyList />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
