import styled from 'react-emotion';

export const Placeholder = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  color: ${props => (props.danger ? 'red' : props.theme.textColor)};
`;
