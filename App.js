/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {React, useEffect} from 'react';
import { StatusBar, StyleSheet} from 'react-native';
import List from './src/components/List';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './src/components/Details';
import Login from './src/components/Login';
import Welcome from './src/components/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';



function App() {


  const Stack = createNativeStackNavigator();
 

  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Navigator  initialRouteName="Welcome">
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='List' component={List}/>
        <Stack.Screen name='Details'component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>

    // <SafeAreaView style={styles.safeArea}>
    //   <StatusBar></StatusBar>
    //   <List/>    
    // </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign:'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700', 
  },item: {
  borderBottomWidth:1,
  borderBottomColor:'#000',
  marginBottom:20,
  height:40,
  backgroundColor:'#5BC0EB',
  borderRadius:5,
},value:{
  textAlign:'center',
  alignItems:'center',
  fontSize:20,
},safeArea:{
  flex:1,
  paddingRight: 30,
  paddingLeft:30,
},
container: {
  flex:1
},
scrollViewContent:{
  flexGrow:1,
}
});

export default App;
