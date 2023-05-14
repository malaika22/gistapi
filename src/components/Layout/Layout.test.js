import { render } from '@testing-library/react';
import { Layout } from './Layout';
import { GistProvider } from 'context/GistContext';

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GistProvider>
        <Layout />
      </GistProvider>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should match snapshot', () => {
    const { asFragment } = render(
      <GistProvider>
        <Layout />
      </GistProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
