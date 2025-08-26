import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet, StatusBar, Platform} from 'react-native';
import style from './style';
import WebView from 'react-native-webview';

const App = () => {
  return (
<WebView source={{uri:'https://www.google.com'}}/>
  );
}
export default App