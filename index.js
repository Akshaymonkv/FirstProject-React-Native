/**
 * @format
 */

//index.js is the first file that will run when starting a react-native project
import {AppRegistry} from 'react-native'; //AppRegistery is a component inside react-native, it can be considered as an entry point or
                                          //root component
import App from './App';   
import Flexbox from './src/Flexbox'; 
import webView from './src/webView';              //This is to import the App.js file inside the folder, it can be renamed to anything
import {name as appName} from './app.json';//App.json is a file structure which holds the app name data which is called here

AppRegistry.registerComponent(appName, () => App);//This actually passes the appname from app.json and calls app.js


//it then transfers control to App.js
