import React, { useContext } from 'react';
import Gist from './Gist';
import { GistContext } from 'context/GistContext';

const GistList = () => {
  const { gistList, fetchGistsLoading } = useContext(GistContext);
  if (fetchGistsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {gistList.map(
        ({
          updated_at,
          owner: { avatar_url, login },
          comments_url,
          forks_url,
          files,
          description,
          created_at,
          id
        }) => (
          <Gist
            key={id}
            owner={{ avatar_url, login }}
            files={files}
            forks_url={forks_url}
            comments_url={comments_url}
            createdAt={created_at}
            updatedAt={updated_at}
            description={description}
          />
        )
      )}
    </div>
  );
};

export default GistList;
