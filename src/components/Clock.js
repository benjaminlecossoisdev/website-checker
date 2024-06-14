import{React} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Clock({time}){

    return(
        <View>
            <Text style={styles.heure}>{time}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
heure:{
    color:'#337CA0',
    fontSize:20,
},
});

export default Clock;