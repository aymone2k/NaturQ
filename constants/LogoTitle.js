import { StyleSheet, Text, Image, TextInput, View, Button, TouchableWithoutFeedback } from 'react-native';
import { Input } from 'react-native-elements';
import React, {useState} from 'react';
import Kocxy from './Kocxy.js';


export default function LogoTitle() {
    return (
      <Image
        style={{ width: 70, height: 55 }}
        source={require('../assets/logo/logoNS.png')}
      />
    );
  }