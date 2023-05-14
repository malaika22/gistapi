import { render } from '@testing-library/react';
import Header from './Header';
import { GistProvider } from 'context/GistContext';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GistProvider>
        <Header />
      </GistProvider>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should match snapshot', () => {
    const { asFragment } = render(
      <GistProvider>
        <Header />
      </GistProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
