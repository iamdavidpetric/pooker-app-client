const ADMIN_PATH = '/admin';

const UNAUTHORIZED_PATH = '/404';

const DASHBOARD_PATH = '/';

const neutralPaths = {
  UNAUTHORIZED_PATH,
  DEFAULT_PATH: UNAUTHORIZED_PATH,
};

const privatePaths = {
  ADMIN_PATH,
  DEFAULT_PATH: ADMIN_PATH,
};

const publicPaths = {
  DASHBOARD_PATH,
  DEFAULT_PATH: DASHBOARD_PATH,
};

export default { neutral: neutralPaths, private: privatePaths, public: publicPaths };
