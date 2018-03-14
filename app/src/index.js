import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { injectGlobal } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import App from './App';
import { client } from './client';
import registerServiceWorker from './registerServiceWorker';
import { theme } from './styles';
import { FullScreenWrapper } from './components/styled';
import 'antd/dist/antd.css';

injectGlobal`
  html, body, #root {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <FullScreenWrapper>
                <App />
            </FullScreenWrapper>
        </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root')
);
registerServiceWorker();
