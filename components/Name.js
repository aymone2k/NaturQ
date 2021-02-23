import React, {Component, useState} from 'react';
import { StyleSheet, Text, Image, TextInput, View } from 'react-native';
import { Input, Button, Overlay } from 'react-native-elements';
import Hello from '../components/Hello.js';
import Kocxy from '../constants/Kocxy.js';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Name() {

    const[name, setName] = useState("");

    const[nom, setNom] = useState([]);

  const [visible, setVisible] = useState(false);
    const handlePressName = function(){
        
          setNom([...nom, name]);
          setName('');
          setVisible(!visible);
          
        }
    
        
        return(<View style={styles.name}>
             
        <View >
        <Input placeholder= {"Saisie ton prénom ici"} onChangeText={text=> setName(text)} value={name}  leftIcon={{ type: 'font-awesome', name: 'child' }} inputStyle={{ color: "#784834" , fontWeight: "bold" }} />
        <Button  buttonStyle={{backgroundColor: '#C2DB65',padding:"10px", margin:"20px"}}  title="valider" onPress={handlePressName}/>
        
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
 
/>
<Button title="C'est parti!" onPress={handlePressName} />

</Overlay>
</View>
})}
 
</View>
               
    </View>);

}

const styles = StyleSheet.create({
  name:{
    flex:1
  }
})
   