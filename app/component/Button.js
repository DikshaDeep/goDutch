import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Button({label, onPress, variant}) {
  const styles = Styles;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonContainer, variant && styles.variantOutline]}>
          <Text style={[styles.labelContainer, variant && styles.variantOutlineText]}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export {Button}
const Styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    minWidth: 150,
    alignItems: 'center',
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "purple",
    backgroundColor: "purple"
  },
  variantOutline:{
    backgroundColor: "white"
  },
  variantOutlineText: {
    color: 'purple'
  },  
  labelContainer:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'stretch',
    textAlign: 'center',
    paddingHorizontal: 20
  }
})
