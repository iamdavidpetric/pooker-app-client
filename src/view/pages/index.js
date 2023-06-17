import Admin from './private/Admin';
import Dashboard from './public/Dashboard';
import Unauthorized from './neutral/Unauthorized';

const neutralPages = { Unauthorized };
const privatePages = { Admin };
const publicPages = { Dashboard };

export default { neutral: neutralPages, private: privatePages, public: publicPages };
