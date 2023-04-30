import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import './styles/index.css';
import { Main } from './pages/Main';

type RenderProps = {
  path: string;
};

export function render({ path }: RenderProps) {
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </Provider>
  );
  return { html };
}
