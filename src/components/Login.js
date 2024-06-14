import{React,useEffect,useState} from 'react';
import { SafeAreaView,TextInput, StyleSheet, View, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Login({navigation}){

    const [inputEmail, setEmail] = useState('');
    const [inputPassword, setPassword] =useState('');
    
    const authentification = async () =>{
            try {
                const response = await fetch('https://website-checker.boreales-creations.fr/auth',{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/ld+json',
                    },
                    body: JSON.stringify({
                        email: inputEmail,
                        password: inputPassword,
                      }),
                });

                const data = await response.json();
                console.log("MON TOKEN: "+ data.token)
               
                if(response.status == 200){
                    await AsyncStorage.setItem('token', JSON.stringify(data.token));
                }

                console.log("TOKEN ASYNC STORAGE: " + await AsyncStorage.getItem('token'));

                if (await AsyncStorage.getItem('token')){
                   navigation.navigate('List');
                }
                
              } catch (error) {
                console.error(error);
              }
            }   
    

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder='Entrez votre identifiant'
                    onChangeText={text=>setEmail(text)}
                    value={inputEmail}
                >
                </TextInput>
                <TextInput style={styles.input}      
                    placeholder='Entrez votre Mot de passe'
                    onChangeText={text=>setPassword(text)}
                    value={inputPassword}
                >
                </TextInput>
                <Button 
                title='Valider'
                 onPress={authentification}
                >
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
container:{
   paddingLeft:40,
   paddingRight:40,
},input:{
    marginBottom:5,
    borderWidth:1,
    borderBlockColor:'#000'
}
})



export default Login