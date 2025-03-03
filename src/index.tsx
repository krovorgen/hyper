import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './scss/index.scss';
import 'swiper/css';
import { ToastContainer } from 'react-toastify';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <>
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <App />
      </>
    </React.StrictMode>
  );
}
