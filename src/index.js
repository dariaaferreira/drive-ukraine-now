import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import GlobalStyle from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle/>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
