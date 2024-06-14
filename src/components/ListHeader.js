import{React, useEffect, useState} from 'react';
import{Text,View, StyleSheet}from 'react-native';
import Clock from './Clock';

function ListHeader(){

  const [time, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(()=>{

    const interval = setInterval( ()=>{
    update();
    }, 1000);

    return () =>{
      clearInterval(interval);
    }
  }, )

  function update(){
    setCurrentTime(new Date().toLocaleTimeString());
  }

 return(

  <View style={styles.container}>

    <Text style={styles.title}>Website Checker</Text>

    <Clock time={time} style={styles.heure} />
    
  </View>

  );
};

const styles = StyleSheet.create({
container:{
  marginTop:10,
  justifyContent:'center',
  alignItems:'center',
  marginBottom:40,
},title:{
  textAlign:'center',
  color: '#2274A5',
  fontSize: 30,
  fontWeight:'bold',
},button:{
  backgroundColor:'#FF1D15'
}
});

export default ListHeader;

