
import React,{ useEffect , useState}  from 'react';
import { Text, View } from 'react-native';
import styles from './ReconnaissanceAdulte.styles';
import { Button } from 'react-native-elements';
import EtapeAdulte from '../../components/EtapeAdulte.js';
import FicheAdulte from '../../components/FicheAdulte.js';
 
export default function Reconnaissance() {
  const[idResultAdulte,setIdResultAdulte]=useState(undefined)
  const[idEtapeAdulte, setIdEtapeAdulte] = useState(1)

  return (
    <View style={styles.container}>
      
      {idEtapeAdulte !== undefined &&
        <EtapeAdulte 
          id={idEtapeAdulte}
          setId={setIdEtapeAdulte} 
          setResultId={setIdResultAdulte}/> }

          

      {idResultAdulte !== undefined &&
          <FicheAdulte
            id={idResultAdulte}
            setId={setIdResultAdulte} /> }

    </View> 
  );
}