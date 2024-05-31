/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Item
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ListHeader from './src/components/ListHeader';
import ListFooter from './src/components/ListFooter';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  
  const DATA = [
    { id: '1', value: 'Site 1'},
    { id: '2', value: 'site 2'},
    { id: '3', value: 'site 3'},
    { id: '4', value: 'site 4'},
    { id: '5', value: 'site 5'},
    { id: '6', value: 'Site 6'},
    { id: '7', value: 'site 7'},
    { id: '8', value: 'site 8'},
    { id: '9', value: 'site 9'},
    { id: '10', value: 'site 10'},
    { id: '11', value: 'Site 11'},
    { id: '12', value: 'site 12'},
    { id: '13', value: 'site 13'},
    { id: '14', value: 'site 14'},
    { id: '15', value: 'site 15'},
  ];

  return (

    <SafeAreaView style={styles.safeArea}>

      <StatusBar></StatusBar>

      <ListHeader />
      
      <View style={styles.container}>

      <ScrollView >
        <Text style={styles.sectionTitle}>Website Checker </Text>
          { <FlatList
            data={DATA}
            renderItem={({item})=>
            <View style={styles.item}>
              <Text>{item.value}</Text>
            </View>
            }
          />       
          }
        </ScrollView>
        <ListFooter/>
      </View>
    
    </SafeAreaView>

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
  },
 
  item: {
  borderBottomWidth:1,
  borderBottomColor:'#000',
  marginBottom:10,
  height:60
},safeArea:{
  flex:1
},
container: {
  flex:1
},
scrollViewContent:{
  flexGrow:1,
}
});

export default App;
