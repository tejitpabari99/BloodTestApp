import React, { Component } from 'react';
import { StyleSheet ,Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation';

import tabTest from './Screens/tabTest'
//import LoginScreen from './Screens/LoginScreen'
//import SignupScreen from './Screens/SignupScreen'
import HomeScreen from './Screens/HomeScreen'
import TestSelection from './Screens/TestSelection'
import TestSetup from './Screens/TestSetup'
import VideoInfo from './Screens/VideoInfo'
import VideoPlaceHolder from './Screens/VideoPlaceHolder'
import Instructions from './Screens/Instructions'
import Instructions2 from './Screens/Instructions2'
import Instructions3 from './Screens/Instructions3'
import Instructions4 from './Screens/Instructions4'
import Instructions5 from './Screens/Instructions5'
import Instructions6 from './Screens/Instructions6'
import Instructions7 from './Screens/Instructions7'
import Instructions8 from './Screens/Instructions8'
import Instructions9 from './Screens/Instructions9'
import Instructions10 from './Screens/Instructions10'
import Instructions11 from './Screens/Instructions11'
import Instructions12 from './Screens/Instructions12'
import PreResults from './Screens/PreResults'
import ResultsPage from './Screens/ResultsPage'
import ResultShare from './Screens/ResultShare'
import HowToShare from './Screens/HowToShare'
import ShareMethods from './Screens/ShareMethods'
import Email from './Screens/Email'
import TextMessage from './Screens/TextMessage'
import LinkURL from './Screens/LinkURL'
import DeletePage from './Screens/DeletePage'
import ScanResults from './Screens/ScanResults'
import ScanResults2 from './Screens/ScanResults2'
import GuestInstructions from './Screens/GuestInstructions'
import GuestInstructions2 from './Screens/Instructions2'
import GuestInstructions3 from './Screens/GuestInstructions3'
import GuestInstructions4 from './Screens/GuestInstructions4'
import GuestInstructions5 from './Screens/GuestInstructions5'
import GuestInstructions6 from './Screens/GuestInstructions6'
import GuestInstructions7 from './Screens/GuestInstructions7'
import GuestInstructions8 from './Screens/GuestInstructions8'
import GuestInstructions9 from './Screens/GuestInstructions9'
import GuestInstructions10 from './Screens/GuestInstructions10'
import GuestInstructions11 from './Screens/GuestInstructions11'
import GuestInstructions12 from './Screens/GuestInstructions12'
import GuestTestSelection from './Screens/GuestTestSelection'
import GuestVideo from './Screens/GuestVideo'
import GuestResources from './Screens/GuestResources'
import Clinics from './Screens/Clinics'
import TestAccuracy from './Screens/TestAccuracy'
import WindowPeriod from './Screens/WindowPeriod'
import HIVSyphillisInfo from './Screens/HIVSyphillisInfo'
import Syphillisinfo from './Screens/Syphillisinfo'
import HIVinfo from './Screens/HIVinfo'
import DuoTest from './Screens/DuoTest'
import DuoVideoPlaceHolder from './Screens/DuoVideoPlaceHolder'
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUKMFNY68L-7Y2LRbsO0e6olex-xnzWrk",
    authDomain: "smartest-df9af.firebaseapp.com",
    databaseURL: "https://smartest-df9af.firebaseio.com",
    projectId: "smartest-df9af",
    storageBucket: "smartest-df9af.appspot.com",
    messagingSenderId: "782261463353"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
    render() {
        return(
            <AppNavigator />
        );
    }
}

const AppNavigator = StackNavigator({

    //LoginScreen : {screen : LoginScreen},
    //SignupScreen : {screen : SignupScreen},
    HomeScreen : {screen: HomeScreen},
    TestSelection : {screen : TestSelection},
    TestSetup : {screen : TestSetup},
    VideoInfo : {screen : VideoInfo},
    tabTest : {screen: tabTest},
    VideoPlaceHolder : {screen : VideoPlaceHolder},
    GuestInstructions : {screen : GuestInstructions},
    GuestInstructions2 : {screen : GuestInstructions2},
    GuestInstructions3 : {screen : GuestInstructions3},
    GuestInstructions4 : {screen : GuestInstructions4},
    GuestInstructions5 : {screen : GuestInstructions5},
    GuestInstructions6 : {screen : GuestInstructions6},
    GuestInstructions7 : {screen : GuestInstructions7},
    GuestInstructions8: {screen : GuestInstructions8},
    GuestInstructions9: {screen : GuestInstructions9},
    GuestInstructions10: {screen : GuestInstructions10},
    GuestInstructions11: {screen : GuestInstructions11},
    GuestInstructions12: {screen :GuestInstructions12},
    GuestTestSelection:{screen :GuestTestSelection},
    GuestVideo:{screen :GuestVideo},
    Instructions : {screen : Instructions},
    Instructions2 : {screen : Instructions2},
    Instructions3 : {screen : Instructions3},
    Instructions4 : {screen : Instructions4},
    Instructions5 : {screen : Instructions5},
    Instructions6 : {screen : Instructions6},
    Instructions7 : {screen : Instructions7},
    Instructions8: {screen : Instructions8},
    Instructions9: {screen : Instructions9},
    Instructions10: {screen : Instructions10},
    Instructions11: {screen : Instructions11},
    Instructions12: {screen : Instructions12},
    ScanResults: {screen : ScanResults},
    ScanResults2: {screen : ScanResults2},
    PreResults: {screen : PreResults},
    ResultsPage: {screen : ResultsPage},
    ResultShare: {screen : ResultShare},
    HowToShare: {screen : HowToShare},
    ShareMethods: {screen : ShareMethods},
    Email: {screen : Email},
    TextMessage: {screen : TextMessage},
    LinkURL: {screen : LinkURL},
    DeletePage: {screen : DeletePage},
    GuestResources: {screen : GuestResources},
    Clinics: {screen : Clinics},
    TestAccuracy: {screen : TestAccuracy},
    WindowPeriod: {screen : WindowPeriod},
    HIVSyphillisInfo: {screen : HIVSyphillisInfo},
    Syphillisinfo: {screen : Syphillisinfo},
    HIVinfo: {screen : HIVinfo},
    DuoVideoPlaceHolder: {screen : DuoVideoPlaceHolder},
    DuoTest: {screen : DuoTest}
})

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#00FFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
