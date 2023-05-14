import { render } from '@testing-library/react';
import Search from './Search';
import { GistProvider } from 'context/GistContext';

describe('Search', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GistProvider>
        <Search />
      </GistProvider>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should match snapshot', () => {
    const { asFragment } = render(
      <GistProvider>
        <Search />
      </GistProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
