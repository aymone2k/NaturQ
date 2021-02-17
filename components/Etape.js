import React,{ useEffect , useState}  from 'react';
import{View, StyleSheet, Button, Text } from 'react-native';

import axios from 'axios';


export default function Etape(props){

    const [etape, setEtape] = useState(undefined);
    useEffect(function(){
        axios.get('http://localhost:8000/question/' + props.id).then(function(reponse){
            setEtape(reponse.data);})
        },[props.id]);

    if(etape === undefined){
        return(<View>
            <Text>En Chargement ...</Text>
        </View>)
    } 
    return( 
        <View>
            <Text>
                {etape.title}
            </Text>
            {etape.proposal.map(function(proposalData){
                return <Button title={proposalData.content.title} onPress={function(){props.setId(proposalData.next_step.id)}}/>
            })}
           
        </View>
    );
}