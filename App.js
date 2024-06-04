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
    { id: '1', value: 'Website 1'},
    { id: '2', value: 'Website 2'},
    { id: '3', value: 'Website 3'},
    { id: '4', value: 'Website 4'},
    { id: '5', value: 'Website 5'},
    { id: '6', value: 'Website 6'},
    { id: '7', value: 'Website 7'},
    { id: '8', value: 'Website 8'},
    { id: '9', value: 'Website 9'},
    { id: '10', value: 'Website 10'},
    { id: '11', value: 'Website 11'},
    { id: '12', value: 'Website 12'},
    { id: '13', value: 'Website 13'},
    { id: '14', value: 'Website 14'},
    { id: '15', value: 'Website 15'},
  ];

  return (

    <SafeAreaView style={styles.safeArea}>

      <StatusBar></StatusBar>

      <ListHeader />
      
      <View style={styles.container}>

      <ScrollView >
          { <FlatList
            data={DATA}
            renderItem={({item})=>
            <View style={styles.item}>
              <Text style={styles.value}>{item.value}</Text>
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
