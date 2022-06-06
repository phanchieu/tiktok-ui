import config from '~/config';

//layouts
import HeaderOnly from '~/layouts/HeaderOnly';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//publicRoutes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.Profile, component: Profile },
  { path: config.routes.upload, component: Upload, Layout: HeaderOnly },
  { path: config.routes.search, component: Search, Layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
