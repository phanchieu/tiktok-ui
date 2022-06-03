import routesConfig from '~/config/routes';

//layouts
import HeaderOnly from '~/components/Layout/HeaderOnly';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//publicRoutes
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.Profile, component: Profile },
  { path: routesConfig.upload, component: Upload, Layout: HeaderOnly },
  { path: routesConfig.search, component: Search, Layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
