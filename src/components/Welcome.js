import{React, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Welcome({navigation}){


    
  const check= async ()=>{

    if (await AsyncStorage.getItem('token')){
      navigation.navigate('List');
   }else{
    navigation.navigate('Login');
   }
  }
  
  useEffect( ()=>{
    check();
},[]);

    return(
        <View>
            <Text style={styles.texte}>Bienvenue ! :) </Text>
        </View>
    )
};

const styles = StyleSheet.create({
texte:{
    marginTop:300,
    fontSize:40,
    textAlign:'center',
},
});

export default Welcome;