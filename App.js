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
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Heading from './Heading';
import Hero from './Hero';
import LatestMembers from './LatestMembers';
import Mosiac from './Mosiac';
import data from './data';
import News from './News';
import Card from './Card';
import Grid from './Grid';
import Topup from './Topup';
import Collapsible from './Collapsible';
import TabView from './TabView';
import TabsView from './TabsView';
import Sign from './Sign';
import Forms from './Forms';

const App= ()  => {
  const datas=data
  return (
    <ScrollView>

      <View>
        <Heading/>
        <Card/>
        <Grid/>
        <Collapsible/>
        <Topup/>
        <TabView/>
        <TabsView/>
        <Forms/>
        <Sign/>
       <Hero/>
        <LatestMembers/>
        <View style={{paddingBottom:100}}></View>
      </View>
    <View>
      <Text style={{paddingTop:10,fontWeight:'bold',fontSize:22}}>
        Monday
      </Text>
    </View>
    <Mosiac/>
    <Text style={{paddingLeft:6,fontWeight:'bold',fontSize:22,marginTop:10}}>
        News
      </Text>


      <News/>

   </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default App;
