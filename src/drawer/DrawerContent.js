import React, {Component} from "react";
import{
    View,
    StyleSheet,
    Text,
    Image
}from "react-native";

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profileOp}>
                 <View style={styles.profileImgDetail}>
                    <View style={styles.profileImage}>
                           <Image style= {styles.profileLogo} 
                               source={require('../../Assets/logo.png')}></Image>
                    </View>
                 </View>
                    <View style={styles.profileDetails}>
                        <Text style={styles.profileContent} >Akshaymon K V</Text>
                        <Text style={styles.profileContent}>kvakshaymon@gmail.com</Text>
                        <Text style={styles.profileContent}>7356683493</Text>
                    </View>
                  

                </View>
                <Text style={styles.drawerText}onPress={()=>this.props.navigation.navigate('Home')}>
                    Home
                </Text>
                <Text style={styles.drawerText} onPress={()=>this.props.navigation.navigate('Profile')}>
                    Profile
                </Text>
                <Text style={styles.drawerText} onPress={()=>this.props.navigation.navigate('Setings')}>
                    Settings
                </Text>
                <Text style={styles.drawerText} onPress={()=>this.props.navigation.navigate('Aboutus')}>
                    About Us
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor: 'black',
            height: '100%',
            width: '100%'
        },

        drawerText:{
            fontSize: 20,
            color: 'white',
            marginTop: 10
        },
        profileOp:{
            backgroundColor:'white',
            height: '20%',
            width: "100%",
            flexDirection: 'row',
            alignItems: 'center'
        },
        profileImgDetail:{ 
            alignItems: 'center',
            justifyContent: 'center'
        },
        profileImage:{
            height: 50,
            width: 50,
            backgroundColor: 'grey',
            paddingLeft: 10,
            marginLeft: 10,
            marginRight: 5,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center'
        },
        profileLogo:{
            height: 60,
            width: 60,
            borderRadius: 50
            
        },
        profileContent:{
            fontWeight: 'bold'
        },
        profileDetails:{
            marginTop: 5,
            marginLeft:10
        }
    }
)