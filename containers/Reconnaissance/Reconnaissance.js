
import React,{ useEffect , useState}  from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './Reconnaissance.styles';
import { Button } from 'react-native-elements';
import EtapeEnfant from '../../components/EtapeEnfant.js';
import Kocxy from '../../constants/Kocxy.js';
import Hello from '../../components/Hello';
import FicheEnfant from '../../components/FicheEnfant.js';
 
export default function Reconnaissance() {
  const[idResult,setIdResult]=useState(undefined)
  const[idEtape, setIdEtape] = useState(1)
 
  return (
    <View style={styles.contain}>
 <ImageBackground source={require('../../assets/images/screen/treez.jpg')} style={styles.images}>

          {idEtape !== undefined && 
        <EtapeEnfant 
          id={idEtape}
          setId={setIdEtape}
          setResultId={setIdResult}/> }
      
      {idResult !== undefined &&
          <FicheEnfant 
            id={idResult}
            setId={setIdResult}
          />
      }
      
  </ImageBackground>
    </View> 
  );
}