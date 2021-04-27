/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from './Colors';


const Heading= ()  => {
  return (

   <View style={styles.container}>
      <View>
          <MaterialCommunityIcons name="menu" size={30}  color='#000'/>
      </View>
      <View>
        <Image source={require('./flowlogo.png')} style={{width:200,height:50}} />
      </View>
      <View>
      <Avatar.Image
      source={{uri:'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}}
      size={50}
      />
      </View>

   </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexWrap:'wrap',
    flexDirection:'row',
   justifyContent:'space-between',
   alignItems: 'center',
   backgroundColor: '#fcb71b',

  }
});

export default Heading;
