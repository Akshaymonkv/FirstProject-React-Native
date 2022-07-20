import React, {Component} from "react";
import { WebView } from 'react-native-webview';
import{
    View
}from "react-native"

export default class webView extends Component{
    render(){
        
        return <WebView source={{ uri: 'https://reactnative.dev/' }} />
        
    }
}