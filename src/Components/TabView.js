import React,{useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
export default function TabView(props) {

const [index, setIndex] = useState('1');
const onChangeIndex = (text) => {
setIndex(text)
}
const FirstScreen=()=>{
    return(
        <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent:'center',alignItems:'center',height:300 }}>
    <Text> First Screen</Text>
    </View>
    )
    }
const SecondScreen=()=>{
   return(
    <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center',alignItems:'center' ,height:300}}>
    <Text> Second Screen</Text>
    </View>
   )
    }
const ThirdScreen=()=>{
    return(
        <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center',alignItems:'center',height:300 }}>
    <Text> Third Screen</Text>
    </View>
    )
    }
    return (
        <View style={{ flex: 1 ,marginTop:20}}>
            <View style={styles.mainContainer}>
                <Text onPress={() => { onChangeIndex('1')}}
                style={index === '1' ? styles.selectedIndex : styles.unselectedIndex}>
                FIRST TAB
                </Text>
                <Text onPress={() => {onChangeIndex('2')}}
                style={index == '2' ? styles.selectedIndex : styles.unselectedIndex}>
                SECOND TAB
                </Text>
                <Text onPress={() => {onChangeIndex('3')}}
                style={index === '3' ? styles.selectedIndex : styles.unselectedIndex}>
                THIRD TAB
                </Text>
            </View>
            {
index === '1' &&
<FirstScreen navigation={props.navigation} />
}
{
index === '2' &&
<SecondScreen navigation={props.navigation} />
}
{
index === '3' &&
<ThirdScreen/>
}
        </View>
    )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    selectedIndex: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    borderBottomWidth: 5,
    borderBottomColor: "#47315a",

    },
    unselectedIndex:
    {
    color: 'black',
    fontSize: 14,
    },
    mainContainer:{

    width: windowWidth,
    height:50,
    paddingLeft: '7%',
    paddingRight: '7%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    }
    });
