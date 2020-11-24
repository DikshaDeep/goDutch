import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const CustomTextInput = ({label, value, onChangeText, required, name, textAlign}) => {
  const styles = Styles;
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text>
          {label}
        </Text>
        {required && <Text style={styles.requiredText}>
          *
        </Text>}
      </View>
      <TextInput
        style={[styles.textContainer, {textAlign: textAlign ? textAlign : 'center'}]}
        onChangeText={text => onChangeText(text, name)}
        value={value}
      />
    </View>
  );
}

export {CustomTextInput};

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    marginVertical: 10
  },
  labelContainer:{
    flex: 1,
    flexDirection:'row',
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    shadowOpacity: 1,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  requiredText:{
    color: 'red'
  }
})
