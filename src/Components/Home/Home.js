import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

let datainfo = [
    {Tittle:'abc', Single:'1', Price:'123'},
    {Tittle:'def', Single:'2', Price:'456'},
    {Tittle:'ghi', Single:'3', Price:'789'},
]






export default class Home extends Component {
    componentWillMount(){
        this.setState({arr:datainfo})
    }
    state = {
    arr : []
    }

    renderhome = ({item}) => {
        console.log(item.Tittle)
    
    return(

        <View style = {Styles.textview}>
             <View style = {Styles.image}>
            
                    <Image
                    style={{width: 50, height: 50,}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
            </View>     

            <View style = {{alignItems: 'center',borderWidth:5, borderColor:'red',flex:1}}>
        
                <Text>{item.Tittle}</Text>
                <Text>{item.Single}</Text>
                <Text>{item.Price}</Text>
            </View>  

            
        </View>

    )
    }







    render(){
        return(
            <View style = {Styles.container}>
{/* 
                <View style = {Styles.textview}>
                <View style = {{alignItems: 'center',flex:1}}>
                    <Text>Tittle</Text>
                    <Text>Single</Text>
                    <Text>Price</Text>
                 </View> */}

                    {/* <View style = {Styles.box}>
                     <Text>IMAGE</Text>
                     </View>
                
                </View> */}

                <FlatList
                data = {this.state.arr}
                renderItem = {this.renderhome}
                />
            </View>
        )
    }
}


const Styles = StyleSheet.create({
    container: {
        // justifyContent: '',
        // alignItems: 'center',
        backgroundColor: 'skyblue',
        flex: 1,

    },

    textview: {
        justifyContent: 'flex-start',
        flex:1,
        borderWidth: 2,
        margin: 20,
        padding: 20,
        flexDirection: 'row',
        
    },

    box: {
        width:20,
        height: 20,
        backgroundColor: 'blue',
        
    },
    image: {
        alignItems:'flex-start',
        borderWidth: 5,
        borderColor:'white',
        
    }
})