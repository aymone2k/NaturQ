
import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Enfant.styles';
import { Button } from 'react-native-elements';
import Hello from '../../components/Hello.js';
import Koxy from '../../constants/Koxy.js';
import Name from '../../components/Name.js'





export default function Enfant2({navigation: {navigate}}) {
  const[name, setName]=React.useState();
const handlePress= function(){
  name=value
}

  
  return (
    <View>
       
       
       <Hello
       phrase={Koxy[1].phrase}
        avatar={Koxy[1].avatar}
        />
       <Text>{name} </Text>
        <Text> je suis là pour t'accompagner dans cette aventure .
      Que souhaite tu faire?</Text>

      <Button
          title="Reconnaissance"
          onPress={() =>navigate('Reconnaissance')
          }
        />
        <Button
          title="Parcours"
          onPress={() =>navigate('Parcours')
          }
        />
    </View>
  );
}