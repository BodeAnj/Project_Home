import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Settings extends Component {
    render(){
        return(
            <View style = {Style.container}>
                <Text>
                    are
                </Text>
            </View>
        )
    }
}

const Style = StyleSheet.create({

    container:{
        backgroundColor:'red',
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        
    }


})