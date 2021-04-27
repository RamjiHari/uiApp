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
import data from './data';
import LinearGradient from 'react-native-linear-gradient';


const Mosiac= ()  => {
  const datas=data;
  const mosiac = () => {
    return datas.map(data => {
        return  <View key={data.id} style={{height:250,flexBasis:'49%',margin:2}} >
                   <ImageBackground imageStyle={{borderRadius:20}} source={{uri:data.image_link}} style={{height:200,position:'absolute',top:0,bottom:0,left:0,right:0}}>
                   <LinearGradient style={{height:250,position:'absolute',top:0,bottom:0,left:0,right:0,flexDirection:'row',borderRadius:20}} start={{x: 0.1, y: 0.6}} end={{x: 0.1, y: 1}} colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}>
                    <Text style={{fontSize:15,fontWeight:'bold',paddingLeft:15,color:'#fff',alignSelf:'flex-end',paddingBottom:5}}>{data.headline}</Text>
                    </LinearGradient>
                    </ImageBackground>
                </View>
    })
}
  return (
                <View style={styles.container}>

                     {mosiac()}

                </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height:800,
    overflow:'hidden',
    flexWrap:'wrap',
    flexDirection:'row',
   justifyContent:'space-between'
  }
});

export default Mosiac;
