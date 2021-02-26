import { StyleSheet, Text, Image, View } from 'react-native';

import React, {useEffect, useState} from 'react';


export default function Decoupe({phrase1, avatar,phrase2}) {

  const[phraseA, setPhraseA]= useState(phrase1);
  const[phraseB, setPhraseB]= useState(phrase2);
console.log(phrase1, phraseA)

  setPhraseA = phrase1.split(" ");
  setPhraseB = phrase2.split(" "); 
  
  // Afficher les valeurs du tableau 
  for(const i = 0; i < setPhraseA.length; i++){
    document.write("" + setPhraseA[i] + "");
    console.log(setPhraseA[i]);
  }
  for(const j = 0; j < setPhraseB.length; j++){
    document.write("" + setPhraseB[j] + "");
    console.log(setPhraseB[j]);
  }

    
        
        return<View>
        <View >
        <Text>{phraseA}</Text>
            <Image source={avatar} style={{width:60, height:100}}/>
            <Text>{phraseB}</Text>
            
           </View>
     
        
    </View>

}

const styles = StyleSheet.create({
    homeApp:{
      flex:1,
      flexDirection:"column"
    },
})  