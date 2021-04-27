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
import product from '../utils/product';


const Topup= ()  => {
  const datas=product;
  const topup = () => {
    return datas.map(product => {

        return  <View key={product.ids} style={{paddingBottom:10,paddingTop:10,width:'49%',margin:2,backgroundColor:'#982ee8',borderRadius:10,}} >
                         <View style={{justifyContent:'center',alignSelf:'center'}}>
                                <View style={{flexDirection:'row'}} >
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,width:60,color:'#fff'}}>Float</Text>
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,color:'#fff'}}>:</Text>
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,color:'#fff'}}>{product.Float}</Text>
                                </View>
                                <View style={{flexDirection:'row',}}>
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,width:60,color:'#fff'}}>Fee</Text>
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,color:'#fff'}}>:</Text>
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,color:'#fff'}}>{product.Fee}</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,width:60,color:'#fff'}}>Duration</Text>
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,color:'#fff'}}>:</Text>
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,color:'#fff'}}>{product.Fee}</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,width:60,color:'#fff'}}>Repay Date</Text>
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,color:'#fff'}}>:</Text>
                                <Text style={{fontWeight:'bold',fontSize:12,marginTop:2,color:'#fff'}}>{product.RepayDate}</Text>
                                </View>
                                </View>
                </View>
    })
}
  return (
                <View style={{marginTop:10}}>
                    <Text style={{paddingTop:10,fontWeight:'bold',fontSize:22,marginLeft:10,textAlign:'center'}}>
                    Topup Products
                    </Text>

                <View style={styles.topup}>
                <Text style={{paddingTop:10,fontWeight:'bold',fontSize:20,marginLeft:10,}}>
                    less than 1 million produts,
                    </Text>
                  {topup()}
                  <Text style={{paddingTop:10,fontWeight:'bold',fontSize:20,marginLeft:10,}}>
                    less than 2 million produts,
                    </Text>
                  {topup()}
                  <Text style={{paddingTop:10,fontWeight:'bold',fontSize:20,marginLeft:10,}}>
                    less than 3 million produts,
                    </Text>
                  {topup()}
                </View>
                </View>
  );
};

const styles = StyleSheet.create({
    topup:{

    overflow:'hidden',
    flexWrap:'wrap',
    flexDirection:'row',
   justifyContent:'space-between'
  }
});

export default Topup;
