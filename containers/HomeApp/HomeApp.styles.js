import{ StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  homeApp:{
    flex:1,
    flexDirection:"column",
  
    
  },
   
    image:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: "center",
     
    } ,
    homeText: {
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: '#444720a0',
      padding:"50px",
  
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom:"40px",
     
  
    }
  });

  export default styles