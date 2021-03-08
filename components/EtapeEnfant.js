import React,{ useEffect , useState}  from 'react';
import{View, Text, ActivityIndicator , Image} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import Kocxy from '../constants/Kocxy.js';
import Hello from '../components/Hello';
import axios from 'axios';


export default function EtapeEnfant(props){
    const[etape, setEtape] = useState(undefined);
    const [visible, setVisible] = useState(true);

  const toggleOverlay = () => {
    setVisible(!visible);
  }; 
     useEffect(function(){
        axios.get("http://localhost:8000/question/" + props.id)  
        .then(function(reponse){ 
            setEtape (reponse.data); 
        })
     }, [props.id]); 

   return(<View>
       <Overlay isVisible={visible} onBackdropPress={toggleOverlay} style={{width:1000}}>
<Hello avatar={Kocxy[3].avatar} phrase1={Kocxy[3].phrase1} />
<Button buttonStyle={{backgroundColor: '#00ff00',width:150}} title="C'est parti" onPress={toggleOverlay} />
 </Overlay>
 <View>
{ etape === undefined &&
<View >
    <ActivityIndicator size="large" color="#00ff00" />
   </View>

}
 { etape !== undefined &&
    <View >
        
            

        {etape.nextProposals.map(function(nextProposalsData){
            return(<View style={{flex:1, flexDirection:"row"}}> 
                <Text>{nextProposalsData.title}</Text>
            <Button  buttonStyle={{backgroundColor: '#34856E',width:150}} containerStyle={{margin:20}} title={nextProposalsData.content}onPress={function(){
            props.setId(nextProposalsData.nextStep.id)
        }}/>
        <View >
        <Image style={{width:60, height:50, resizeMode:'contain', position:"absolute", margin:20}} source={{uri: nextProposalsData.picture }} /></View>
        </View>)  })}

   </View>

 }
 </View>
   </View>)

}