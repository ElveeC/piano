import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route
        path={path}
        element={element}
        key={path}
      />
    ))}
  </Routes>
);

export default AppRouter;
