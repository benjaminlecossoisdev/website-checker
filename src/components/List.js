import{React, useEffect, useState} from 'react';
import{ScrollView,View,StyleSheet, TextInput, Button,Text,TouchableOpacity}from 'react-native';
import ListFooter from './ListFooter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListHeader from './ListHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

  function List({navigation}){

      const [inputText, setInputText] = useState('');
      const [inputURL, setInputURL] =useState('');

      const [listItems, setListItems] = useState([]);

      //récuperer la liste
      const getListFromStorage = async () => {
        
        try{
            let listfromStorage = await AsyncStorage.getItem('listItems'); //renvois des chaines de caractères
            if(listfromStorage){
              setListItems(JSON.parse(listfromStorage)); // ajoutes la liste au format JSON
            }
        }catch(error){
            console.error(error);
        }
    
      }  

      //enregistrer la liste dans le asyncStorage
      const saveListToStorage= async () => {
          const newItem={text:inputText, url:inputURL}
          const newListItems = [...listItems, newItem];
          setListItems(newListItems);
          setInputText('');
          setInputURL('');
          try {
            await AsyncStorage.setItem('listItems', JSON.stringify(newListItems));
          } catch (error) {
            console.error('Failed to save item to AsyncStorage', error);
          }
      };

      //Supprimer la liste de asyncStorage
      const deleteListFromStorage = async (newList) => {
        try {
          await AsyncStorage.removeItem('listItems').then(()=>{setListItems([])});
        } catch (error) {
          console.error(error);
        }
      };

      //Suprimer un item de la liste stockée dans asyncStorage
      const deleteItemFromStorage = async(index)=>{ 

        const newList= listItems.filter((_,i) => i!=index);

        setListItems(newList);

        try {
          await AsyncStorage.setItem('listItems', JSON.stringify(newList));
        } catch (error) {
          console.error('Failed to save item to AsyncStorage', error);
        }
      }

      useEffect( ()=>{
            getListFromStorage();
      },[]);


     return(
        <View style={styles.container}>
          <ListHeader/>
         <TextInput
            placeholder='Entrez le nom du site'
            style={styles.input}
            value={inputText}
            onChangeText={text => setInputText(text)}
          />
           <TextInput
           placeholder="Entrez l'url du site"
            style={styles.input}
            value={inputURL}
            onChangeText={text => setInputURL(text)}
          />
          <View style={styles.buttons}>
          <Button 
          color="#F2BB05"
          style={styles.button} 
          title='Ajouter à la liste'
            onPress={saveListToStorage}>
          </Button>
          <Button 
           color="#F2BB05"
          style={styles.button} 
          title='Supprimer la liste'
            onPress={
              deleteListFromStorage
            }>
          </Button>
          </View>
  

        <ScrollView >
  
          {listItems.map( (item, index) => {
            return (

            <View styles={styles.itemList} key={index} >

            
            <TouchableOpacity onPress={() => navigation.navigate('Details',{itemIndex: index, itemText: item})}>

            <Text style={styles.itemText}>
              {item.text}
              {"\n"}
              {item.url}
            </Text>

            </TouchableOpacity >

          
            <Button
              key={index}
               color="#124E78"
               style={styles.buttonItem}
               title='Supp.'
               onPress={()=>deleteItemFromStorage(index)}
               ></Button>
          
            </View>
            )})
          
          }
        </ScrollView>
        <ListFooter/>
      </View>
      )
  }  
    const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingRight:40,
        paddingLeft:40
    },input:{
        marginBottom:5,
        borderWidth:1,
        borderBlockColor:'#000'
    },buttons:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    itemText: {
      textAlign:'center',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        height:40,
        backgroundColor:'#5BC0EB',
        borderRadius:5,
      },
    buttonItem:{
      width:50   
     }
    });
  

  export default List