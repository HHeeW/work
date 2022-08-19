import React, {Component} from 'react'

import { Navigator } from 'react-native';

import InitPage from './page/InitPage'

export default function App() {
  return (
    <Navigator
      initialRoute={{component: InitPage}}
      configureScene = { () => Navigator.SceneConfigs.PushFromRight}
      renderScene ={ (route, navigator) =>{
        let Component = route.component;
        return React.createElement(Component, {...route.passProps, navigator})
      } }
    />
  );
}

