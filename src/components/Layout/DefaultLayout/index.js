import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
