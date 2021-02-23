import React, {Component, useState} from 'react';
import { StyleSheet, Text, Image, TextInput, View } from 'react-native';
import { Input, Button, Overlay } from 'react-native-elements';
import Hello from '../components/Hello.js';
import Kocxy from '../constants/Kocxy.js';


export default function Name() {

    const[name, setName] = useState("");

    const[nom, setNom] = useState([]);

  const [visible, setVisible] = useState(false);
    const handlePressName = function(){
        
          setNom([...nom, name]);
          setName('');
          setVisible(!visible);
          
        }
    
        
        return(<View>
             
        <View >
        <Input placeholder= {"Saisie ton prénom ici"} onChangeText={text=> setName(text)} value={name} />
        <Button  buttonStyle={{backgroundColor: '#C2DB65',padding:"20px"}}  title="valider" onPress={handlePressName}/>
        
           </View>   
           <View>
  {nom.map((item)=>{return <View style={{flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: "center",}}> <Overlay isVisible={visible} onBackdropPress={handlePressName}> <Text> Bienvenue,{item}</Text>

<Hello
 avatar={Kocxy[1].avatar}
 phrase2={Kocxy[1].phrase2}
  phrase1={Kocxy[1].phrase1}
 
/></Overlay>
</View>
})}
 
</View>
               
    </View>);

}