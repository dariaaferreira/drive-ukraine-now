import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import GlobalStyle from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/drive-ukraine-now">
        <GlobalStyle/>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
