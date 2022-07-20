import React , {Component} from "react"
import{
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from "react-native"


class Title extends Component{
  render(){
    return(
      <View>
        <Text style={styles.textView}>Welcome to the app</Text>
      </View>
    )
  }

}

export default class login extends Component{
   constructor(){
    super()
    this.state =
      {
          name: null
      }
    
   }

   updateText(username){
    console.log(username)
    this.setState(
      {
        name:username
        
      }
    )
   }
   render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={require('../Assets/bg.jpg')} style={styles.backgroundImage}>

          <Image source={require('../Assets/logo.png')} style={styles.logo}>
          </Image>

         <Title name="User" >

         </Title>

          <TextInput style={styles.inputView} placeholder='username'
                                              placeholderTextColor={"black"}
                                              maxLength={10}
                                              onChangeText={(username)=>this.updateText(username)}>

          </TextInput>

          <TextInput style={styles.inputView} placeholder='password'
                                              placeholderTextColor={"black"}
                                              secureTextEntry={true}
                                              maxLength={16}>

          </TextInput>

          <TouchableHighlight style={styles.buttonView} onPress={()=>this.props.navigation.navigate('Flexbox',
                                                              {username:this.state.name} )}>
            <Text style={styles.buttonText}>
              Sign in
            </Text>
          </TouchableHighlight>
        </ImageBackground>

      </View>
    )
   }
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: 'black'
  },

  backgroundImage:{
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'

  },

  logo:{
    height: 80,
    width : 80,
    borderRadius: 30
  },

  textView:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black', 
    fontStyle: 'italic',
    fontFamily: 'Helvetica',
    marginTop: 5
  },

  inputView: {
    width: '80%',
    height: 50,
    marginTop : 10,
    borderWidth: 1,
    borderColor: '#1579d1',
    paddingLeft: 10,
    borderRadius: 20
  },

  buttonView:{
    backgroundColor: '#4aacf7',
    width: '30%',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  }
}
)