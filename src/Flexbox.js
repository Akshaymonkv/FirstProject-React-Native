import React, {Component} from "react";
import{
    View,
    StyleSheet,
    Text,
    TouchableHighlight
}from "react-native"
//creating a class for learning the props concept, the props.name, name will be added when the the below
//function is called below the touchablehighlight inside the class component
class FlexContent extends Component{
    render(){
        return(
            <View>
            <Text>
                My name is {this.props.name}
            </Text>
            </View>
        )
    }
}

//constructor is used to set the initial value bcause it will be the first methos run
export default class Flexbox extends Component{
    constructor(){
        super()
        this.state = {
            text_one : "State",
            text_two : "Props",
            text_three: "example"
        }



    }  

//the updateText method is to modify the existing value to the newwest value - an example for state
//state are used for variables or objects which can change it's value in the future
    updateText(){
        this.setState(
            {
                text_one : "Updated",
                text_two : "text",
                text_three: "displayed"
            }
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.state.text_one}
                </Text>
                <Text style={styles.text}>
                    {this.state.text_two}
                </Text>
                <Text style={styles.text}>
                    {this.state.text_three}
                </Text>

                <TouchableHighlight style={styles.buttonView} onPress={()=>this.props.navigation.navigate('webView')}>
                    <Text style={styles.buttonText}>
                        UPDATE
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonView} onPress={()=>this.props.navigation.navigate('Drawer')}>
                    <Text style={styles.buttonText}>
                        click me
                    </Text>
                </TouchableHighlight>

                <FlexContent name={this.props.route.params.username}> 

                </FlexContent>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
           
        },

        text:{
            fontSize: 20,
            color: 'black'
            
        },

        buttonView:{
            borderWidth : 1,
            backgroundColor: 'green',
            width:'80%',
            height:55,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10
        },

        buttonText:{
            fontWeight: 'bold',
            color: 'white',
           
        }
    }
)