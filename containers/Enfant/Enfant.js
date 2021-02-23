
import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Enfant.styles';
import { Button, Input, Overlay} from 'react-native-elements';

import Hello from '../../components/Hello.js';
import Kocxy from '../../constants/Kocxy.js';
import Name from '../../components/Name.js';




export default function Enfant({navigation: {navigate}}) {
 


  return (
    <View >
      
      <Hello 
      phrase1={Kocxy[0].phrase1}
      avatar={Kocxy[0].avatar}
      phrase2={Kocxy[0].phrase2}
      />
      <Name/>
      <Button  buttonStyle={{backgroundColor: '#34856E',padding:"20px"}}  title="Continuer" onPress={() =>navigate('Enfant2')}/>
      
    
    </View>
  );
}