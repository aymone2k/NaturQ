
import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Enfant.styles';
import { Button, Input, Overlay} from 'react-native-elements';

import Hello from '../../components/Hello.js';
import Kocxy from '../../constants/Kocxy.js';
import Name from '../../components/Name.js';
import Speak from '../../components/Speak';


export default function Enfant({navigation: {navigate}}) {
   const[name, setName] = useState("");
   const[nom, setNom] = useState([]);
   const[monEtat, setMonEtat] = useState(true);
   const[nextEtat, setNextEtat] = useState(false);
  
   const handlePressName = function(){
      if(monEtat == false){
        setMonEtat(true)
      
      }
      else{
        setMonEtat(false)
        setNom([...nom, name]);
        setName('');
        setNextEtat(false)
      }       
   }
  
   const handlePressNext = function(){
      setNextEtat(true)
      setMonEtat(false)
   }

  
  return (
    <View style={styles.enfant}>      
      <View style={styles.name} >
            {monEtat === true && 
               <View>

                  <Hello  phrase1={Kocxy[0].phrase1} avatar={Kocxy[0].avatar} />
                  <Input placeholder= {"Saisie ton prénom ici"} onChangeText={text=> setName(text)} value={name}  leftIcon={{ type: 'font-awesome', name: 'child' }} inputStyle={{ color: "#784834" , fontWeight: "bold" }} />
                  <Button  buttonStyle={{backgroundColor: '#C2DB65',padding:10, margin:20}}  title="valider" onPress={handlePressName}/>
              </View>
             }
                             
          
            {nom.map((item)=>{return <View>{monEtat === false &&  nextEtat === false &&
              <View styleStyle={{width:350}}>
                  <Text style={{fontFamily:'monospace', fontWeight:'bold', fontSize:18, flexWrap:'wrap', width:300}}>  Bienvenue {item}, </Text>
                  <Hello avatar={Kocxy[1].avatar} phrase1={Kocxy[1].phrase1} />
                  <Button  buttonStyle={{backgroundColor: '#C2DB65',padding:10, margin:20}} title="C'est Parti !" onPress={handlePressNext} />
              </View>
            } 
            
      </View>})}
                        
    </View>
      
    {nextEtat === true && 
    <View>
      <Hello avatar={Kocxy[2].avatar} phrase1={Kocxy[2].phrase1}/>
      <Button  buttonStyle={{backgroundColor: '#34856E', padding:20, marginBottom:30}} 
          title="Reconnaissance"
          onPress={() =>navigate('Reconnaissance')
          }/>
        <Button  buttonStyle={{backgroundColor: '#34856E',padding:20}} 
          title="Parcours"
          onPress={() =>navigate('Parcours')
          } />
    </View>
    }
  </View>);
}