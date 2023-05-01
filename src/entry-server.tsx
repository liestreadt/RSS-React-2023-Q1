import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './styles/index.css';

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
