import Paths from '../paths';
import Pages from 'src/view/pages';

const Unauthorized = {
  element: Pages.neutral.Unauthorized,
  path: Paths.neutral.UNAUTHORIZED_PATH,
};

const Admin = {
  element: Pages.private.Admin,
  path: Paths.private.ADMIN_PATH,
};

const Dashboard = {
  element: Pages.public.Dashboard,
  path: Paths.public.DASHBOARD_PATH,
};

const neutralRoutes = [Unauthorized];
const privateRoutes = [Admin];
const publicRoutes = [Dashboard];

export { neutralRoutes, privateRoutes, publicRoutes };
