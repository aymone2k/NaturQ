
import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Enfant.styles';
import { Button, Input, Overlay} from 'react-native-elements';

import Hello from '../../components/Hello.js';
import Kocxy from '../../constants/Kocxy.js';
import Name from '../../components/Name.js';




export default function Enfant({navigation: {navigate}}) {
 
  
    const [visible, setVisible] = useState(true);
  
    const toggleOverlay = () => {
      setVisible(!visible);
    };
  
  return (
    <View style={styles.enfant}>
      
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
      
      <Name/>
      <Button title="ok" onPress={toggleOverlay} />
     
      </Overlay>
      
  <Hello
 avatar={Kocxy[2].avatar}
 phrase2={Kocxy[2].phrase2}
  phrase1={Kocxy[2].phrase1}
 
/>

  
       
<Button  buttonStyle={{backgroundColor: '#34856E',padding:"20px", marginBottom:"30px"}} 
          title="Reconnaissance"
          onPress={() =>navigate('Reconnaissance')
          }
        />
        <Button  buttonStyle={{backgroundColor: '#34856E',padding:"20px"}} 
          title="Parcours"
          onPress={() =>navigate('Parcours')
          }
        />
    </View>
  );
}