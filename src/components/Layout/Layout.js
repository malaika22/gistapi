import React from 'react';
import Header from './Header/Header';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
