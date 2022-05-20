import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, i) => {
            const Page = route.component;
            let Layout = DefaultLayout
            if(route.Layout) {
              Layout = route.Layout
            }
            else if(route.Layout === null){
              Layout = Fragment
            }
            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
