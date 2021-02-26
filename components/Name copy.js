import React, {Component, useState} from 'react';
import { StyleSheet, Text, Image, TextInput, View } from 'react-native';
import { Input, Button, Overlay } from 'react-native-elements';
import Hello from '../components/Hello.js';
import Kocxy from '../constants/Kocxy.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useLinkProps } from '@react-navigation/native';
import NameSaisi from '../components/NameSaisi.js';


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
    
        
        return(<View style={styles.name} >
            

            {monEtat === true && 
            <View>
               <Hello 
      phrase1={Kocxy[0].phrase1}
      avatar={Kocxy[0].avatar}
      phrase2={Kocxy[0].phrase2}
      />
 <Input placeholder= {"Saisie ton prénom ici"} onChangeText={text=> setName(text)} value={name}  leftIcon={{ type: 'font-awesome', name: 'child' }} inputStyle={{ color: "#784834" , fontWeight: "bold" }} />
        <Button  buttonStyle={{backgroundColor: '#C2DB65',padding:"10", margin:"20"}}  title="valider" onPress={handlePressName}/>
              </View>
                        }
                     
       
       
        
      
        
          
        {nom.map((item)=>{return <View>{monEtat === false &&  <View><Text>
          Bienvenue {item}, </Text>
          <Hello
          avatar={Kocxy[1].avatar}
          phrase1={Kocxy[1].phrase2}
           phrase2={Kocxy[1].phrase1}
         
         />
         
        
         </View>
          } </View>})}
         
      
               
    </View>);

}

const styles = StyleSheet.create({
  name:{
    flex:1
  }
})
   