
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {Card, CustomTextInput, Button} from '../component'

const Content = (props) => {
  console.log('props', props)
  const [value, handleChangeText] = useState('xxxxxxx');
  const handleChange = (text) => {
    handleChangeText(text);
  }

  const HandleContinue = () => {
    props.navigation.navigate("Setup");
  }
  return(
    <View style={{width: '100%'}}>
      <CustomTextInput required label="Mobile Number" value={value} onChangeText={handleChange} />
      <Button label="Continue" onPress={HandleContinue} />
    </View>
  )
}

function Login(props) {
  return (
    <ScrollView>
      <View style={{width: '100%'}}>
        {/* <Text>Login</Text> */}
        <Card content={<Content {...props}/>} />
      </View>
    </ScrollView>
  )
}

export {Login}
