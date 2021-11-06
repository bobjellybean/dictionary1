import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen 
        backgroundColor= "blue"
        centerComponent = {{
          text: 'Pocket Dictionary',
          style: {color:'#fff', fontSize: 20},
        }}
        />

        <TextInput
        style = {styles.inputbox}
        onChangeText= { text => {
          this.setState({ text:text});
        }}
        value={this.state.text}
        />
      </View>
    )
  }
}
