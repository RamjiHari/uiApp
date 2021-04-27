/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    Button,
    ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import {Avatar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from './Colors';
{/* <Text style={{fontWeight:'bold',fontSize:32,marginLeft:10,color:'#fff'}}>
            Hi Joel!
        </Text> */}

const Card= ()  => {
  return (

<View style={styles.container}>
    <View style={styles.header}>
    <Text style={{fontWeight:'bold',fontSize:32,marginLeft:10,color:'#000'}}>
            Hi Joel!
        </Text>
    </View>

    <View style={styles.circle}>

        <Text style={{marginTop:10,fontWeight:'bold',fontSize:22,textAlign:'center',color:'#fff'}}>Last Topup</Text>
        <View style={{justifyContent:'center',alignSelf:'center'}}>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,width:100,color:'#fff'}}>Float</Text>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,color:'#fff'}}>:</Text>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,color:'#fff'}}>1,000,000 UGX</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,width:100,color:'#fff'}}>Fee</Text>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,color:'#fff'}}>:</Text>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,color:'#fff'}}>12,000 UGX </Text>
        </View>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,width:100,color:'#fff'}}>Duartion</Text>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,color:'#fff'}}>:</Text>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,color:'#fff'}}>3 days</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,width:100,color:'#fff'}}>Paid on</Text>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,color:'#fff'}}>:</Text>
        <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,color:'#fff'}}>03-Feb-21</Text>
        </View>
        <View style={{marginTop:10,fontWeight:'bold', alignItems:'center'}}>
        <TouchableOpacity style={{alignItems: "center",backgroundColor: "#cdced5",padding: 10,width:200,borderRadius:20,borderWidth:1}} onPress={()=>alert("dd")}>
            <Text style={{fontWeight:'bold'}}>Repeat Last FA</Text>
        </TouchableOpacity>

        </View>
        </View>
    </View>
</View>

  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      header: {
        width: '100%',
        height: 200,
        position: 'relative',
        top: 0,
        left: 0,
        backgroundColor: '#fcb71b',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,

      },
      circle: {
        backgroundColor:'#293275',
        width:'90%',
        justifyContent:'center',
        alignSelf:'center',
        top:'30%',
        borderRadius:10,
        position: 'absolute',
        paddingBottom:20,
        elevation: 5,
      },
      heading:{


      }
});

export default Card;
