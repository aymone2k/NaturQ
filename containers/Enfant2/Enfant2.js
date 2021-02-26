
import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../Enfant2/Enfant2.styles';
import { Button } from 'react-native-elements';
import Hello from '../../components/Hello.js';
import Kocxy from '../../constants/Kocxy.js';
import Name from '../../components/Name.js'
import NameSaisi from '../../components/NameSaisi';





export default function Enfant2() {

   
  return (
    <View>
  <Hello
 avatar={Kocxy[2].avatar}
 phrase2={Kocxy[2].phrase2}
  phrase1={Kocxy[2].phrase1}
 
/>

  
       
<Button  buttonStyle={{backgroundColor: '#34856E', padding:20, marginBottom:30}} 
          title="Reconnaissance"
          onPress={() =>navigate('Reconnaissance')
          }
        />
        <Button  buttonStyle={{backgroundColor: '#34856E', padding:20}} 
          title="Parcours"
          onPress={() =>navigate('Parcours')
          }
        />
    </View>
  );
}