import React,{ useEffect , useState}  from 'react';
import{View, Text, Image,
   ActivityIndicator, StyleSheet} from 'react-native';
import { Button} from 'react-native-elements';
import FicheAdulte from './FicheAdulte.js';
import axios from 'axios';


export default function EtapeAdulte(props){
  
    const[etapeAdulte, setEtapeAdulte] = useState(undefined);
    const[cache, setCache] = useState(false);

   

     useEffect(function(){
        axios.get("http://localhost:8000/question/" + props.id)  
        .then(function(reponse){ 
            setEtapeAdulte(reponse.data); 
        })}, [props.id]);

     if (etapeAdulte === undefined){
         return (<View >
             <ActivityIndicator size="large" color="#00ff00" />
            </View>
         )}

       



    return (<View >
             {etapeAdulte.nextProposals.map(function(nextProposalsData){ 
             
             const handlePressZappe = function(){
                 if (nextProposalsData.nextStep.id === 26){
                   setCache(true) }
           
              props.setId(nextProposalsData.nextStep.id) 
          }       

              
                return(<View>
                  
                  { cache === false &&
                  <View>
                      <Button  buttonStyle={{backgroundColor: '#34856E',width:150}} containerStyle={{margin:10}} title={nextProposalsData.content}onPress={handlePressZappe}/>
                       <Image style={{width:60, height:40, fex:1, resizeMode:'contain'}} source={{uri: nextProposalsData.picture }} />
                </View>}
                  
                  {cache === true &&
                    <View>
                      <Text>Coucou</Text>
                      </View>
                  }


                </View>)
        })}
       
       </View>

     );}

   
       