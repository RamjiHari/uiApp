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
  View,
  ScrollView,
  ImageBackground
} from 'react-native';
import data from '../utils/data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Grid= ()  => {
  const datas=data;
  const grid = () => {
    return datas.map(data => {
        return  <View key={data.id} style={{height:150,flexBasis:'44%',margin:10,alignItems: "center",justifyContent: "center",backgroundColor:'#f9e7db',borderRadius:10}} >
                      <MaterialCommunityIcons name={data.bank} size={40} />
                     <Text style={{fontSize:15,fontWeight:'bold', }}>{data.menu}</Text>
                </View>
    })
}
  return (
            <View>
              <Text style={{paddingTop:120,fontWeight:'bold',fontSize:22,marginLeft:10}}>
                  Product at your fingertips
                  </Text>

                <View style={styles.grid}>

                     {grid()}
                </View>
                </View>
  );
};

const styles = StyleSheet.create({
  grid:{
    overflow:'hidden',
    flexWrap:'wrap',
    flexDirection:'row',
   justifyContent:'space-between'
  }
});

export default Grid;
