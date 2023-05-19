import React from 'react';

const Layout = ({ children, className = '' }) => {
  return (
    <section className={` bg-light dark:bg-dark ${className}`}>
      {children}
    </section>
  );
};
export default Layout;
