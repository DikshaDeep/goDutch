import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {Card, CustomTextInput, Button} from '../component'

const Content = (props) => {
  console.log('props', props)
  const [state, handleChangeText] = useState({
    name: 'Please enter your name',
    mobile: '9912928923',
    upiId: 'abc@ybl',
    profession: 'Student'
  });
  const handleChange = (text, e) => {
    handleChangeText({...state, [e]: text});
  }

  return(
    <View style={{width: '100%'}}>
      <CustomTextInput textAlign='left' label="Name" name='name' value={state.name} onChangeText={handleChange} />
      <CustomTextInput textAlign='left' label="Mobile No" name='mobile' value={state.mobile} onChangeText={handleChange} />      
      <CustomTextInput textAlign='left' label="Upi Id" name='upiId' value={state.upiId} onChangeText={handleChange} />      
      <CustomTextInput textAlign='left' label="Profession" name='profession' value={state.profession} onChangeText={handleChange} />      
    </View>
  )
}

function Details(props) {
  const HandleContinue = () => {
    props.navigation.navigate("Login");
  }
  const styles = Styles;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Your Details</Text>
        <Card content={<Content {...props}/>} />
        <Button label="Continue" onPress={HandleContinue} />
      </View>
    </ScrollView>
  )
}

export {Details}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  label:{
    marginHorizontal: 10
  }
})
