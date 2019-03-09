import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Welcome extends Component {
    render(){
        return(
            <View style = {Style.container}>
                <Text>
                    How
                </Text>
            </View>
        )
    }
}

const Style = StyleSheet.create({

    container:{
        backgroundColor:'green',
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        




        

    }


})
