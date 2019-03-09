/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow 
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Home from './src/Components/Home/Home';
import Navigator from './src/AppNavigation';



export default class App extends Component{
  render(){

    return(

      <Navigator />

    );
  }
}
