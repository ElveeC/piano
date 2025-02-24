import cls from './MainPage.module.scss';
//import { PianoKeyList } from '@/entities/PianoKey';
import { OctaveList } from '@/components/OctaveList/OctaveList';

const MainPage = () => {

  return (
    <div className={cls.page}>
      <div className={cls.inner}>
        <div>Йа пианинко</div>
        <OctaveList />
      </div>
    </div>
  );
};

export { MainPage };
