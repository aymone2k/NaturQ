import React,{ useEffect , useState}  from 'react';
import{View, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';

import axios from 'axios';


export default function EtapeAdulte(props){
    const[etapeAdulte, setEtapeAdulte] = useState(undefined);

     useEffect(function(){
        axios.get("http://localhost:8000/question/" + props.id)  
        .then(function(reponse){ 
            setEtapeAdulte(reponse.data); 
        })
     }, [props.id]);

   

     if (etapeAdulte === undefined){
         return (<View >
             <ActivityIndicator size="large" color="#00ff00" />
            </View>
         )}
    return (<View >
             {etapeAdulte.nextProposals.map(function(nextProposalsData){
                return <Button  buttonStyle={{backgroundColor: '#34856E',width:150}} containerStyle={{margin:10}} title={nextProposalsData.content}onPress={function(){
                props.setId(nextProposalsData.nextStep.id)
            }}/>
        })}
       
       </View>

     );}