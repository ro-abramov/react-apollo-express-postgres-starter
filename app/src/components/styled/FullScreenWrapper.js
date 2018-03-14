import styled from 'react-emotion';

export const FullScreenWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: nowrap;

    color: ${props => props.theme.textColor};
    font-family: ${props => props.theme.font};
    background-color: ${props => props.theme.bg};
`;
