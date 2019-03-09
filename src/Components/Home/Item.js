import React, {Component} from 'react';
import {View , Text, StyleSheet} from 'react-native';

export default class Item extends Component {
    render(){
        return(
            <View style = {Style.container}>
                <Text> Stack</Text>
            </View>
        )
    }
}

const Style = StyleSheet.create({

container:{

    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'pink',

}
})