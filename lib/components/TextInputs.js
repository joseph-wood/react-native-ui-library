import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export class TextInputBasic extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      View,
      { style: styles.wrapper },
      React.createElement(TextInput, {
        placeholder: this.props.placeholder,
        onChange: this.props.onChange,
        value: this.props.value,
        style: styles.input
      })
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
    paddingRight: 12
  }
});