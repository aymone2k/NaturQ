import React,{ useEffect , useState}  from 'react';
import{View, Text, ActivityIndicator ,Modal, Image} from 'react-native';
import { Button } from 'react-native-elements';
import Kocxy from '../constants/Kocxy.js';
import Hello from '../components/Hello';
import axios from 'axios';
import LogoTitle from './../constants/LogoTitle'

export default function EtapeEnfant(props){
    const[etape, setEtape] = useState(undefined);
    const [modalVisible, setModalVisible] = useState(true);

  const toggleOverlay = () => {
    setModalVisible(!modalVisible);
  }; 
     useEffect(function(){
        axios.get("http://localhost:8000/question/" + props.id)  
        .then(function(reponse){ 
            setEtape (reponse.data); 
        })
     }, [props.id]); 

   return(<View>
       <Modal animationType='fade'  transparent={true} visible={modalVisible} onRequestClose={toggleOverlay} style={{ justifyContent:'center', alignItems:'center'}} >
<View style={{flex:1, margin:40, padding:20, backgroundColor: 'white', justifyContent:'center', alignItems:'center'}}>
<Hello avatar={Kocxy[3].avatar} phrase1={Kocxy[3].phrase1}  />
<Button buttonStyle={{backgroundColor: '#00ff00',width:150, margin:40}} title="C'est parti" onPress={toggleOverlay} />
 </View>
 </Modal>
 <View>
{ etape === undefined &&
  <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
                <LogoTitle/>
            <ActivityIndicator size="large" color="#00ff00" />
           </View>

}
 { etape !== undefined &&
    <View >
        
            

        {etape.nextProposals.map(function(nextProposalsData){
          
          const handlePressZappe = function(){
            if(nextProposalsData.finalResult?.id !== undefined){
              props.setId()
              props.setResultId(nextProposalsData.finalResult.id)
            }
            else{
             props.setId(nextProposalsData.nextStep.id )
             props.setResultId()
            }}
            return(<View style={{flex:1, flexDirection:"row"}}> 
               
            <Button  buttonStyle={{backgroundColor: '#34856E',width:150}} containerStyle={{margin:20}} title={nextProposalsData.content} onPress={handlePressZappe}/>
        <View >
        <Image style={{width:70, height:60, resizeMode:'contain', position:"absolute", margin:20}} source={{uri: nextProposalsData.picture }} /></View>
        </View>)  })}

   </View>

 }
 </View>
   </View>)

}