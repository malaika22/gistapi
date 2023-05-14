import styled from 'styled-components';
import PropTypes from 'prop-types';
import { convertDate, getFileCount } from 'utils/helpers';
import { Avatar } from 'components';
import Octicon from 'react-octicon';

const Gist = ({ owner, createdAt, forks_url, comments_url, updatedAt, files, description }) => {
  const { avatar_url, login } = owner || {};
  const fileCount = getFileCount(files);

  return (
    <GistWrapper>
      <GistHeader>
        <GistAuthor>
          <Avatar image={avatar_url} />
          <AuthorName>{login}</AuthorName>
        </GistAuthor>
        <GistActions>
          <ActionItem>
            <Octicon name="code" />
            <ActionInfo>{fileCount} File</ActionInfo>
          </ActionItem>
          <ActionItem href={forks_url} target="_blank">
            <Octicon name="repo-forked" />
            <ActionInfo>Forks</ActionInfo>
          </ActionItem>
          <ActionItem href={comments_url} target="_blank">
            <Octicon name="comment" />
            <ActionInfo>Comments</ActionInfo>
          </ActionItem>
        </GistActions>
      </GistHeader>
      <TimeStampSection>
        <TimeStamp>Created at : {convertDate(createdAt)}</TimeStamp>
        <TimeStamp>Updated at : {convertDate(updatedAt)}</TimeStamp>
      </TimeStampSection>
      <GistDescription>{description}</GistDescription>
      <FileList>
        {Object.values(files).map(({ filename, raw_url }) => (
          <FileItem href={raw_url} target="_blank" key={filename}>
            <Octicon name="file-text" />
            <FileName>{filename}</FileName>
          </FileItem>
        ))}
      </FileList>
    </GistWrapper>
  );
};

const GistWrapper = styled.div`
  padding: 20px 0 30px 0;
  border-bottom: 1px solid #e4e2e2;
`;

const GistHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GistAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GistActions = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`;

const AuthorName = styled.div`
  font-size: 16px;
`;

const ActionItem = styled.a`
  display: flex;
  text-decoration: none;

  gap: 5px;
  align-items: center;
`;

const ActionInfo = styled.div`
  font-weight: bold;
`;

const TimeStampSection = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 10px;
`;

const TimeStamp = styled.div`
  font-size: 16px;
`;

const GistDescription = styled.div`
  padding: 20px 0;
`;

const FileList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const FileItem = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
`;

const FileName = styled.div`
  font-size: 16px;
`;

Gist.propTypes = {
  owner: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  files: PropTypes.any,
  forks_url: PropTypes.string,
  comments_url: PropTypes.string,
  description: PropTypes.string
};

export default Gist;
