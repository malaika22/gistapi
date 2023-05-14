import { createContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { getPublicGists } from '../services/gistService';
import PropTypes from 'prop-types';

export const GistContext = createContext();

export const GistProvider = ({ children }) => {
  const { data, loading: fetchGistsLoading } = useFetch(getPublicGists);
  const [gistList, setGistList] = useState([]);

  useEffect(() => {
    setGistList(data);
  }, [data]);

  return (
    <GistContext.Provider value={{ gistList, setGistList, fetchGistsLoading }}>
      {children}
    </GistContext.Provider>
  );
};

GistProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
