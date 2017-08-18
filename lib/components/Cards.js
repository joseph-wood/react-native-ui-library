import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      View,
      { style: styles.container },
      this.props.children
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e2e2e2',
    marginLeft: '5%',
    marginRight: '5%',
    padding: 20,
    alignItems: 'center'
  }
});