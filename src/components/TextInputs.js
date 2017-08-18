import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export class TextInputBasic extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input} 
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}
          autoCapitalize={this.props.autoCapitalize}
          autoCorrect={this.props.autoCorrect}
          autoFocus={this.props.autoFocus}
          blurOnSubmit={this.props.blurOnSubmit}
          defaultValue={this.props.defaultValue}
          editable={this.props.editable}
          keyboardType={this.props.keyboardType}
          maxLength={this.props.maxLength}
          placeholderTextColor={this.props.placeholderTextColor}
          returnKeyType={this.props.returnKeyType}
          secureTextEntry={this.props.secureTextEntry}
          selectTextOnFocus={this.props.selectTextOnFocus}
          selectionColor={this.props.selectionColor}
          keyboardAppearance={this.props.keyboardAppearance}
          clear={this.props.clear}
        />
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
    marginTop: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e2e2e2',
    paddingLeft: 12,
    paddingRight: 12,
  }
});