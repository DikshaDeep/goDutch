/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'react-native';

import {StackApp} from './app/routes';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <StackApp />
      {/* <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            
          </View>
        </ScrollView>
      </SafeAreaView> */}
    </>
  );
};

export default App;
