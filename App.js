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
import Heading from './src/Components/Heading';
// import Hero from './src/Components/Hero';
// import LatestMembers from './src/Components/LatestMembers';
// import Mosiac from './src/Components/Mosiac';
// import News from './src/Components/News';
import data from './src/utils/data';
import Card from './src/Components/Card';
import Grid from './src/Components/Grid';
import Topup from './src/Components/Topup';
import Collapsible from './src/Components/Collapsible';
import TabView from './src/Components/TabView';
import TabsView from './src/Components/TabsView';
import Tab from './src/Components/Tab';
import Sign from './src/Components/Sign';
import Forms from './src/Components/Forms';

const App= ()  => {
  const datas=data
  return (

    <ScrollView>

        <Heading/>
        <Card/>
        <Grid/>
        <Sign/>
        <Topup/>
        <Tab/>
        <Forms/>

        </ScrollView>

  );
};

const styles = StyleSheet.create({

});

export default App;
