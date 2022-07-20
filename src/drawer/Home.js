import React, {Component} from "react";
import{
    View,
    StyleSheet,
    Text
}from "react-native"

export default class Home extends Component{
    render(){
      return(
        <View style={styles.conatiner}>
          <Text style={styles.textbb}>Welcome to the Home</Text>
        </View>
      )
    }
  
  }


const styles = StyleSheet.create(
    {
        conatiner:{
            backgroundColor:'white'
        },

        textbb:{
            fontSize: 20,
            fontWeight: 'bold'
      
        }
    }
)