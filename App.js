import React from "react";
import Setup from "./setup";

import { Provider } from 'react-redux';
import configureStore from './src/components/store/configureStore';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Setup />
      </Provider>
    );
  }
}
