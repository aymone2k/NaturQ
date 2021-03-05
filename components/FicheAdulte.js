import React,{ useEffect , useState}  from 'react';
import{View, Text , ActivityIndicator} from 'react-native';

import axios from 'axios';



export default function FicheAdulte(props, item) {
 
    const [ficheAdulte, setFicheAdulte] = useState(undefined);
 
    useEffect(function() {
        axios.get('http://localhost:8000/result/' + props.id)
        .then(function(reponse) {
            setFicheAdulte(reponse.data);
        })
    }, [props.id]);
 
    if(ficheAdulte === undefined) {
        return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
        )
    }
   
    return (
        <View style={styles.container}>
        
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
  