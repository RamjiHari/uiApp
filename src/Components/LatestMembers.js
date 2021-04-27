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
  Image,
  ScrollView
} from 'react-native';
import data from '../utils/data';


const LatestMembers= ()  => {
  const datas=data;
  const latestMembers = () => {
    return datas.map(data => {
        return  <View key={data.id} style={{alignItems:'center',padding:5}} >
                   <Image source={{uri:data.user_avatar}} style={{height:50, width:50, borderRadius: 25, marginHorizontal:22 }} />
                    <Text>{data.username}</Text>
                </View>
    })
}
  return (
<View>
                <View>
                    <Text style={{fontSize:24,fontWeight:'bold',paddingTop:20, }}>Latest Members</Text>
                </View>
                <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false} >
                     {latestMembers()}
                </ScrollView>
            </View>
  );
};

const styles = StyleSheet.create({
  container:{
    alignSelf:'stretch',
    marginVertical:10,
    backgroundColor:'#a4b0be',
    borderRadius:7,
    paddingVertical:5
  }
});

export default LatestMembers;
