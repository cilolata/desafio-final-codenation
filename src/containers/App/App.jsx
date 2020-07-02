import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

import "./App.css";
import '../../css/global.css';

import Header from "../Header";
import Modal from "../Modal";
import Routes from '../../routes';

const App = () => { 
  return (
    <div className="App">
      <Provider store={store}> 
        <BrowserRouter>
          <Header>
            <Modal/>
            </Header> 
            <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
 }

export default App;
