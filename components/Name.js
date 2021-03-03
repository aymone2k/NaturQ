import React, {Component, useState} from 'react';
import { StyleSheet, Text, Image, TextInput, View } from 'react-native';
import { Input, Button, Overlay } from 'react-native-elements';
import Hello from '../components/Hello.js';
import Kocxy from '../constants/Kocxy.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useLinkProps } from '@react-navigation/native';
import NameSaisi from '../components/NameSaisi.js';
import Speak from './Speak.js';


export default function Name() {
  const[name, setName] = useState("");

  const[nom, setNom] = useState([]);

  const[monEtat, setMonEtat] = useState(true);
 const[page, setPage]= useState("");
 const[item, setItem]= useState("")

  const handlePressName = function(){
    if(monEtat == false){
      setMonEtat(true)
     
    }
     else{
      setMonEtat(false)
      setNom([...nom, name]);
      setName('');
    }         
        
                
      }
  
      
  
    const [visible, setVisible] = useState(true);
  
    const toggleOverlay = () => {
      setVisible(!visible);
    };
  
  return (
    <View style={styles.enfant}>
      
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
      
      <View style={styles.name} >
            

            {monEtat === true && 
            <View>
               <Hello 
      phrase1={Kocxy[0].phrase1}
      avatar={Kocxy[0].avatar}
     
      />
 <Input placeholder= {"Saisie ton prénom ici"} onChangeText={text=> setName(text)} value={name}  leftIcon={{ type: 'font-awesome', name: 'child' }} inputStyle={{ color: "#784834" , fontWeight: "bold" }} />
        <Button  buttonStyle={{backgroundColor: '#C2DB65',padding:"10", margin:"20"}}  title="valider" onPress={handlePressName}/>
              </View>
                        }
                     
       
       
        
      
        
          
        {nom.map((item)=>{return <View style= {styles.modale}>{monEtat === false &&  <View><Speak>
          Bienvenue </Speak> <Text>{item},</Text>
          <Hello
          avatar={Kocxy[1].avatar}
          
           phrase1={Kocxy[1].phrase1}
         
         />
         
         <Button title="C'est Parti !" onPress={toggleOverlay} />
         </View>
          } </View>})}
         
      
               
    </View>
      
     
      </Overlay>
      
  <Hello
 avatar={Kocxy[2].avatar}
   phrase1={Kocxy[2].phrase1}
 
/>

               
    </View>);

}

const styles = StyleSheet.create({
  name:{
    flex:1
  },
  modale:{
    width:"50%"
  }
})
   