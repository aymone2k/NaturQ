import React,{ useEffect , useState}  from 'react';
import{View, Text , ActivityIndicator} from 'react-native';

import axios from 'axios';



export default function Fiche(props, item) {
 
    const [fiche, setFiche] = useState(undefined);
 
    useEffect(function() {
        axios.get('http://localhost:8000/result/' + props.id)
        .then(function(reponse) {
            setFiche(reponse.data);
        })
    }, [props.id]);
 
    if(fiche === undefined) {
        return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
        )
    }
   
    return (
        <View style={styles.container}>
            <Hello
          avatar={Kocxy[5].avatar}
          
          phrase2={Kocxy[5].phrase2}
           phrase1={Kocxy[5].phrase1}
         
         />
          <Text>Titre {item}</Text>
          <Text>Description</Text>
          <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
        <Image
            style={styles.tinyLogo}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
        <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
        <Image
            style={styles.tinyLogo}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
      </View>
  
    );
  }
  