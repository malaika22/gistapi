import { render } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Container />);
    expect(baseElement).toBeTruthy();
  });
  it('should match snapshot', () => {
    const { asFragment } = render(<Container />);
    expect(asFragment()).toMatchSnapshot();
  });
});
