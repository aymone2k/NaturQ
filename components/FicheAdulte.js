import React,{ useEffect , useState}  from 'react';
import{View, Text , ActivityIndicator, Image} from 'react-native';
import LogoTitle from './../constants/LogoTitle'
import axios from 'axios';



export default function FicheAdulte(props) {
  const [ficheAdulte, setFicheAdulte] = useState(undefined);
  
  useEffect(function() {
      axios.get('http://localhost:8000/result/' + props.id)
      .then(function(reponse) {
          setFicheAdulte(reponse.data);
      })
  }, [props.id]);

  if(ficheAdulte === undefined) {
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
                
                <Text>Je suis:</Text>
                <Text style={{fontSize:18, fontWeight: 'bold'}}>{ficheAdulte.resultName}</Text>
                
                <Image style={{width:100, height:100, fex:1, resizeMode:'contain'}} source={{uri: ficheAdulte.resultPhoto }} />
                <Image style={{width:250, height:200,  fex:1, resizeMode:'contain'}} source={{uri: ficheAdulte.photoSpecies }} />
                <View style={{flex:1, flexDirection:'row'}}><Text>{ficheAdulte.text}</Text>
                <Image style={{width:150, height:150,  fex:1, resizeMode:'contain'}} source={{uri: ficheAdulte.photoMore}} />
                </View>
                 </View>
      
        
      
    </View>

  );
}