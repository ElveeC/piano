import cls from './MainPage.module.scss';
import { OctaveList } from '@/components/OctaveList/OctaveList';
import { ScreenWarning } from '@/components/ScreenWarning/ScreenWarning';
import { Footer } from '@/components/Footer/Footer';

const MainPage = () => {
  return (
    <div className={cls.page}>
      <main className={cls.main}>
        <OctaveList className={cls['octave-list']} />
        <ScreenWarning />
      </main>
      <Footer />
    </div>
  );
};

export { MainPage };
