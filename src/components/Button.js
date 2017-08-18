import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

export class ButtonBasic extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableHighlight
          style={styles.input} 
        >
        Submit
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%'    
  },
  input: {
    width: "100%",
    height: 42,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e2e2e2',
    paddingLeft: 12,
    paddingRight: 12,
  }
});