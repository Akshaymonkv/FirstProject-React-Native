import React, {Component} from "react";
import{
    View,
    StyleSheet,
    Text
}from "react-native"

export default  class Cart extends Component{
    render(){
        return(
            <View style={styles.conatiner}>
                <Text style={styles.text}>This is the cart page</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create(
    {
        conatiner:{
            backgroundColor:'white'
        },

        text:{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black'
        }
    }
)