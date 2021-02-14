
import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Enfant.styles';
import { Button, Input } from 'react-native-elements';

import Hello from '../../components/Hello.js';
import Koxy from '../../constants/Koxy.js';
import Name from '../../components/Name.js';




export default function Enfant({navigation: {navigate}}) {


  return (
    <View >
       
      <Hello 
      phrase={Koxy[0].phrase}
      avatar={Koxy[0].avatar}
      />
      <Name/>
    <Button title="Valider" onPress={() =>navigate('Enfant2')}/>
      
      
    </View>
  );
}