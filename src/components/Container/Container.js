import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div`
  max-width: 672px;
  margin: auto;
`;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
