import React,{ useEffect , useState}  from 'react';
import{View, Text, Image,
   ActivityIndicator, StyleSheet} from 'react-native';
import { Button} from 'react-native-elements';
import FicheAdulte from './FicheAdulte.js';
import axios from 'axios';
import LogoTitle from './../constants/LogoTitle'

export default function EtapeAdulte(props){
  
    const[etapeAdulte, setEtapeAdulte] = useState(undefined);
    

   

     useEffect(function(){
        axios.get("http://localhost:8000/question/" + props.id)  
        .then(function(reponse){ 
            setEtapeAdulte(reponse.data); 
        })}, [props.id]);

     if (etapeAdulte === undefined){
         return (<View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
         <LogoTitle/>
     <ActivityIndicator size="large" color="#00ff00" />
    </View>
         )}
 


    return (<View >
             {etapeAdulte.nextProposals.map(function(nextProposalsData){ 
             
             const handlePressZappe = function(){
               if(nextProposalsData.finalResult?.id !== undefined){
                 props.setId()
                 props.setResultId(nextProposalsData.finalResult.id)
               }
               else{
                props.setId(nextProposalsData.nextStep.id )
                props.setResultId()
               }
              
          }       

              
                return(<View>
                  
                  <View>
                      <Button  buttonStyle={{backgroundColor: '#34856E',width:150}} containerStyle={{margin:10}} title={nextProposalsData.content} onPress={handlePressZappe}/>
                       <Image style={{width:70, height:60, fex:1, resizeMode:'contain'}} source={{uri: nextProposalsData.picture }} />
                </View>
                  
                 


                </View>)
        })}
       
       </View>

     );}

   
       