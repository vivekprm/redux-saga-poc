import React from 'react';
import { Provider } from "react-redux";
import Header from './components/Header/Header';
import ImageGrid from './components/ImageGrid/ImageGrid';
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <>
        <Header/>
        <ImageGrid />
      </>
    </Provider>
  );
}

export default App;
