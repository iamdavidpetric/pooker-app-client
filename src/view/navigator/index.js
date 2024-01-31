import PropTypes from 'prop-types';
import { Navigate, Route, Routes } from 'react-router-dom';

import Paths from 'src/process/paths';
import { neutralRoutes, privateRoutes, publicRoutes } from 'src/process/routes';

const renderRoute = (isLoggedIn, type, route) => {
  const redirectTo = isLoggedIn ? Paths.private.DEFAULT_PATH : Paths.public.DEFAULT_PATH;
  const shouldRedirect = (type === 'private' && !isLoggedIn) || (type === 'public' && isLoggedIn);

  return (
    <Route
      path={route?.path}
      element={shouldRedirect ? <Navigate to={redirectTo} replace={true} /> : <route.element />}
      key={route}
    />
  );
};

const Navigator = ({ isLoggedIn = false }) => (
  <Routes>
    {publicRoutes.map(renderRoute.bind(null, isLoggedIn, 'public'))}
    {privateRoutes.map(renderRoute.bind(null, isLoggedIn, 'private'))}
    {neutralRoutes.map(renderRoute.bind(null, isLoggedIn, 'neutral'))}
  </Routes>
);

Navigator.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Navigator;
