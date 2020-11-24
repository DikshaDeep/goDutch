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

  const handleProf = (prof) => {
    alert('Profession: ', prof)
  }

  const handleContinue = () => {
    props.navigation.navigate("Details");
  }
  const styles = Styles;
  return(
    <View style={{flex: 1}}>
      <Text>Current proffession</Text>
      <View style={styles.row}>
        <Button variant='outline' label="Student" onPress={() => handleProf('student')} />
        <Button variant='outline' label="Professional" onPress={() => handleProf('professional')} />
      </View>
      <CustomTextInput required label="full name" name='name' value={state.name} onChangeText={handleChange} />
      <CustomTextInput required label="UPI ID" name='upiId' value={state.upiId} onChangeText={handleChange} />      
      <Button label="Continue" onPress={handleContinue} />
    </View>
  )
}

function Setup(props) {

  const styles = Styles;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>setup your GoDutch account</Text>
        <Card content={<Content {...props}/>} />
      </View>
    </ScrollView>
  )
}

export {Setup}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  label:{
    marginHorizontal: 10
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
