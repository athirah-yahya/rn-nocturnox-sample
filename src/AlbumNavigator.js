import React, {Component} from "react";
import { Provider } from "react-redux";
import store from "./storeConfig";
import {
  Router,
  Scene,
} from "react-native-router-flux";

import {
  Main,
  // StyleGuide,
  Sample,
  Header,
  Footer,
} from "@app-albums";



export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <Scene key="root" hideNavBar={true} >

            {/* MAIN */}
            <Scene key="Main" component={Main} />
            {/*<Scene key="StyleGuide" component={StyleGuide}/>*/}
            <Scene key="Sample" component={Sample}/>
            <Scene key="Header" component={Header}/>
            <Scene key="Footer" component={Footer}/>

          </Scene>
        </Router>
      </Provider>
    );
  }
}
