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
  Dimensions,
  FlatList
} from 'react-native';
import data from './data';

const News= ()  => {
  const datas=data;

  return (
                <View style={styles.container}>

<FlatList style={{width:'100%'}}
      data={datas}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=>(
        <View style={styles.rowStyle}>
          <View style={styles.imageContainer} >
              <Image source={{uri: item.image_link}} style={styles.image} />
          </View>
          <View style={styles.rightSideContent}>
              <Text style={{backgroundColor:"#7bed9f", width:90, paddingVertical:4, textAlign:'center', borderRadius:7}} >{item.type}</Text>
              <Text>{item.headline}</Text>

              <View style={styles.avatarAndCaption}>
                <Image source={{uri: item.user_avatar}} style={{height:24, width:24, borderRadius:12 }} />
                <Text style={{paddingLeft:10}} >{item.username}</Text>
              </View>
          </View>
        </View>

      )}

      />

                </View>
  );
};

const styles = StyleSheet.create({
    rowStyle:{
        flexDirection:'row',
        borderRadius:6,
        backgroundColor:'#a4b0be',
        padding:5,
        margin:5

      },
      imageContainer:{
            margin:3,
            height:120,
            width:(Dimensions.get('window').width / 3 ) - 4,
      },
      image:{
        flex:1,
        width:null,
        alignSelf:'stretch',
        borderRadius: 10,
      },
      rightSideContent:{
        paddingLeft:6,
        width:(Dimensions.get('window').width / 1.5 )
      },
      avatarAndCaption:{
        flexDirection:'row',
        alignSelf:'stretch',
        paddingTop:15
      }
});

export default News;
