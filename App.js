import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Login";
import Flexbox from "./src/Flexbox";
import webView from "./src/webView";
import Home from "./src/drawer/Home";
import Profile from "./src/drawer/Profile";
import Settings from "./src/drawer/Settings";
import Aboutus from "./src/drawer/Aboutus";
import DrawerContent from "./src/drawer/DrawerContent"
import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function AppStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
          name = 'Login'
          component = {Login}
          options = {{headerShown:false}}
      />       
      <Stack.Screen
         name = 'Flexbox'
         component = {Flexbox}
         options = {{headerShown:false}}
      />

      <Stack.Screen
         name = 'webView'
         component = {webView}
         options = {{headerShown:false}}
      />

        <Stack.Screen
         name = 'Drawer'
         component = {MyDrawer}
      />


    </Stack.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator drawerContent={(props)=><DrawerContent{...props}/>}>
       
      <Drawer.Screen
      name = 'Home'
      component = {Home}
            />
      <Drawer.Screen
      name = 'Profile'
      component = {Profile}
           />
           <Drawer.Screen
      name = 'Settings'
      component = {Settings}
           />
           <Drawer.Screen
      name = 'Aboutus'
      component = {Aboutus}
           />
    </Drawer.Navigator>
  )
}

export default function App(){
  return(
 
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  )
}