import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

export class ButtonInfo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableHighlight
        style={[styles.button, styles.buttonInfo]}
          onPress={this.props.onPress} 
        >
          <Text style={styles.text}>{this.props.children}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export class ButtonDanger extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableHighlight
        style={[styles.button, styles.buttonDanger]}
          onPress={this.props.onPress} 
        >
        <Text style={styles.text}>{this.props.children}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%'    
  },
  button: {
    width: "100%",
    height: 42,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonInfo: {
    backgroundColor: '#3498db'    
  },
  buttonDanger: {
    backgroundColor: '#e74c3c'
  },
  text: {
    color: '#FFFFFF'    
  }
});