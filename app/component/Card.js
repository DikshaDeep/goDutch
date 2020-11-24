import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Card({content}) {
  const styles = Styles;
  return (
    <View style={styles.container}>
      <View style={styles.content}>{content}</View>
    </View>
  )
}

export {Card}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    shadowOpacity: 1,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 5,
    elevation: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  content:{

  }
})
