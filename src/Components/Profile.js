import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Profile extends Component {
    render(){
        return(
            <View style = {Style.container}>
                <Text>
                    you
                </Text>
            </View>
        )
    }
}


const Style = StyleSheet.create({

    container:{
        backgroundColor:'yellow',
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        




        

    }


})