/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Heading from './src/Components/Heading';
// import Hero from './src/Components/Hero';
// import LatestMembers from './src/Components/LatestMembers';
// import Mosiac from './src/Components/Mosiac';
// import News from './src/Components/News';
import data from './src/utils/data';

import Grid from './src/Components/Grid';
import Topup from './src/Components/Topup';
import Collapsible from './src/Components/Collapsible';
import TabView from './src/Components/TabView';
import TabsView from './src/Components/TabsView';
import Sign from './src/Components/Sign';
import Forms from './src/Components/Forms';
import TabSearch from './src/Components/TabSearch';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import OverDue from './src/Components/OverDue';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from './src/utils/Colors';
import RegForm from './src/Components/RegForm';
const App= ()  => {
  const Tab = createMaterialBottomTabNavigator();
  return (

    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor='#009387'
      barStyle={{ backgroundColor: Colors.headerColor }}>
      <Tab.Screen
        name="Home"
        component={Heading}
        props="hhh"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Sign}
        options={{
          tabBarLabel: 'Sign',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="signature-image" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Form"
        component={Forms}
        options={{
          tabBarLabel: 'Form',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apps" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={OverDue}
        options={{
          tabBarLabel: 'OverDue',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-today" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={RegForm}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="sticker" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

});

export default App;
