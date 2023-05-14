import styled from 'styled-components';
import GlobalStyles from './GlobalStyle';
import { FeedPage } from 'pages/FeedPage';
import { GistProvider } from 'context/GistContext';
import { Layout } from 'components';

const App = () => {
  return (
    <GistProvider>
      <Wrapper className="App" data-testid="app">
        <Layout>
          <FeedPage />
          <GlobalStyles />
        </Layout>
      </Wrapper>
    </GistProvider>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
