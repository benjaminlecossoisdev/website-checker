import{React} from 'react';
import { Text, View } from 'react-native';

function Details({route, navigation}){
const {indexItem, itemText}= route.params;
    return(

        <View>
            <Text>{JSON.stringify(indexItem)}</Text>
            <Text>{JSON.stringify(itemText)}</Text>
        </View>

    );
}

export default Details