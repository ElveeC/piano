import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainPage } from '@/pages/MainPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={'*'} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
