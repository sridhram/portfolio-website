import React from 'react';

const Layout = ({ children, className = '' }) => {
  return <section className={className}>{children}</section>;
};
export default Layout;
