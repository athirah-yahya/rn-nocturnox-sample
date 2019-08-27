import React, {Component} from "react";
import { Provider } from "react-redux";
import store from "./storeConfig";
import {
  Router,
  Scene,
} from "react-native-router-flux";


import {
  List as SampleList,
} from "@app-pages/Sample";



export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <Scene key="root" hideNavBar={true} >

            {/* SAMPLE */}
            <Scene key="SampleList" component={SampleList} initial/>

          </Scene>
        </Router>
      </Provider>
    );
  }
}
