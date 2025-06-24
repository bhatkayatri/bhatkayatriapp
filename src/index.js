import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';//whole app is iven access to storage
import { store, persistor } from './redux/store';
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
    
    <App />
    </PersistGate>
  </BrowserRouter>
  </Provider>
  ,
  rootElement
);
