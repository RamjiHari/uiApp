import React, {Component,useState} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, VirtualizedList, ScrollView, SafeAreaView,} from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";

const Accordian = (props) => {
    const [data, setData] = useState(props.data);
    const [expanded,setExapanded]=useState(false);
    if(Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    const onClick=(index)=>{
        const temp = data.slice()
        temp[index].value = !temp[index].value
        setData(temp)
      }

      const toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExapanded(!expanded)
      }
    return (
        <View style={{paddingTop:20}}>
            <TouchableOpacity style={styles.row} onPress={()=>toggleExpand()}>
                <Text style={[styles.title]}>{props.title}</Text>
                <Text style={[styles.title]}>{props.date}</Text>
                <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.WHITE} />
            </TouchableOpacity>
        <View style={styles.parentHr}/>
            {
                expanded &&
                <FlatList

                    data={data}
                    keyExtractor={(item,index) =>index.toString()}



                    renderItem={({item, index}) =>
                        <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} onPress={()=>onClick(index)}>
                            <View style={styles.container} >

                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>Float</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>:</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>{item.Float}</Text>

                                <View style={{flexDirection:'row',paddingTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>Fee</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>:</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>{item.Fee}</Text>
                                </View>
                                <View style={{flexDirection:'row',paddingTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>TopupDate</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>:</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>{item.TopupDate}</Text>
                                </View>
                                <View style={{flexDirection:'row',paddingTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>Duration</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>:</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>{item.Duration}</Text>
                                </View>
                                <View style={{flexDirection:'row',paddingTop:10,paddingBottom:10}}>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>Status</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>:</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:'#000'}}>{item.Status}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }/>
            }


       </View>

     );
}

export default Accordian;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexWrap:'wrap',
        flexDirection:'row',
       justifyContent:'space-between',
       alignItems: 'center',
    },
    button:{
        width:'100%',
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
        backgroundColor:Colors.LIGHTGRAY,
        borderRadius:10

    },
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color:'#fff',
        fontWeight:'bold'
    },
    itemActive:{
        fontSize: 12,
        color: Colors.GREEN,
    },
    itemInActive:{
        fontSize: 12,
        color: Colors.DARKGRAY,
    },
    btnActive:{
        borderColor: Colors.GREEN,
    },
    btnInActive:{
        borderColor: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.DARKGRAY,
        borderRadius:10
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: Colors.GRAY,
    },
    parentHr:{
        height:1,
        color: Colors.WHITE,
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: Colors.LIGHTGRAY,
        width:'100%',
    },
    colorActive:{
        borderColor: Colors.GREEN,
    },
    colorInActive:{
        borderColor: Colors.DARKGRAY,
    }
  });