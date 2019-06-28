/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';

const text1 = 'Splash Screen'
const text2 = 'Compare prices of equipments between suppliers and get to know the latest promotion and updates.'

export default class App extends Component {
  render() {
    
    return (
          
        <ImageBackground style={{width:Math.round(Dimensions.get('window').width), height: Math.round(Dimensions.get('window').height)}} resizeMode={'cover'} source={require('./images/background.jpg')} >
        <View style={styles.container}>
        <Image style={styles.logo} source={require('./images/logo.png')}/>
        <Text style={styles.text1_style}>{text1}</Text>
        <Text style={styles.text2_style}>{text2}</Text>
          
          <View style={styles.button_style}>
            
            <TouchableOpacity style={styles.signInButton}  onPress={()=> {Alert.alert('Sign In');}}>
                <Text style={styles.text_Button}>Sign In</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.signOutButton} onPress={()=> {Alert.alert('Sign Out');}}>
                <Text style={styles.text_Button}>Sign Out</Text>
            </TouchableOpacity>
          
          </View>

        </View>
        <ActivityIndicator style={styles.indicator_style} size='large' color="#C5C5C3"></ActivityIndicator>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logo: {
    //position: 'absolute',
    top: '10%',
    position: 'absolute',
    width: 150,
    height: 150,
  },
  text1_style: {
    //position: 'absolute',
    top: '45%',
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    color: '#FFFFFF',
  },
  text2_style: {
    //position: 'absolute',
    top: '45%',
    fontSize: 15,
    textAlign: 'center',
    margin: 40,
    color: '#FFFFFF',
  },
  button_style: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '70%',
  },
  signInButton: {
    width: 110,
    height: 30,
  },

  signOutButton: {
    width: 110,
    height: 30,
    backgroundColor: '#6A1C50', 
    borderRadius: 10,
  },
  text_Button: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  indicator_style: {
    bottom: '5%',
  },
});
