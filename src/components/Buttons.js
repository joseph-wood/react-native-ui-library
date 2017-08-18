import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

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


export class ButtonWarning extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableHighlight
        style={[styles.button, styles.buttonWarning]}
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
    marginTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  buttonInfo: {
    backgroundColor: '#3498db'    
  },
  buttonDanger: {
    backgroundColor: '#e74c3c'
  },
  buttonSuccess: {
    backgroundColor: '#2ecc71'
  },
  buttonWarning: {
    backgroundColor: '#f1c40f'
  }
});