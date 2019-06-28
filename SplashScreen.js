import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';

const text1 = 'Splash Screen'
const text2 = 'Compare prices of equipments between suppliers and get to know the latest promotion and updates.'

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={props.buttonStyle} onPress={() => { Alert.alert(props.text); }}>
      <Text style={props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default class SplashScreen extends Component {

  render() {
    return (
      <ImageBackground style={{ width: Math.round(Dimensions.get('window').width), height: Math.round(Dimensions.get('window').height) }} resizeMode={'cover'} source={require('./images/background.jpg')} >
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./images/logo.png')} />
          <Text style={styles.text1_style}>{text1}</Text>
          <Text style={styles.text2_style}>{text2}</Text>

          <View style={styles.buttonStyle}>
            <CustomButton buttonStyle={styles.signInButton} textStyle={styles.text_Button} text={'Sign In'} />
            <CustomButton buttonStyle={[styles.signInButton, { backgroundColor: '#6A1C50', borderRadius: 10 }]}
              textStyle={styles.text_Button} text={'Sign Out'} />
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
    top: '10%',
    width: 150,
    height: 150,
  },
  text1_style: {
    marginTop: '30%',
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    color: '#FFFFFF',
  },
  text2_style: {
    marginTop: '30%',
    fontSize: 15,
    textAlign: 'center',
    margin: 40,
    color: '#FFFFFF',
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '70%',
  },
  signInButton: {
    width: 110,
    height: 30,
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
