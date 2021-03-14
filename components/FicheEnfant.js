import React,{ useEffect , useState}  from 'react';
import{View, Text , ActivityIndicator, Image} from 'react-native';
import LogoTitle from './../constants/LogoTitle'
import axios from 'axios';
import Hello from './Hello.js';
import Kocxy from './../constants/Kocxy.js';


export default function FicheEnfant(props) {
 
    const [ficheEnfant, setFicheEnfant] = useState(undefined);
 
    useEffect(function() {
        axios.get('http://localhost:8000/result/' + props.id)
        .then(function(reponse) {
            setFicheEnfant(reponse.data);
        })
    }, [props.id]);
 
    if(ficheEnfant === undefined) {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
            <LogoTitle/>
        <ActivityIndicator size="large" color="#00ff00" />
       </View>
        )
    }
   
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#E2ECBA' }}>
       
            <View>
            <Hello  phrase1={Kocxy[5].phrase1} avatar={Kocxy[5].avatar} />
                
                <Text style={{fontSize:18, fontWeight: 'bold'}}>{ficheEnfant.resultName}</Text>
                
                <Image style={{width:100, height:100, fex:1, resizeMode:'contain'}} source={{uri: ficheEnfant.resultPhoto }} />
                <Image style={{width:250, height:200,  fex:1, resizeMode:'contain'}} source={{uri: ficheEnfant.photoSpecies }} />
                <View style={{flex:1, flexDirection:'row'}}><Text>{ficheEnfant.text}</Text>
                <Image style={{width:150, height:150,  fex:1, resizeMode:'contain'}} source={{uri: ficheEnfant.photoMore}} />
                </View>
                 </View>
      
        
      
    </View>

    );
  }
  