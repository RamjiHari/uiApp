import React from 'react'
import { View, Text } from 'react-native'
import {Picker} from '@react-native-picker/picker';


export default function Selector(props) {

    let items = props.data.map((item,index) => {
        return ( <Picker.Item key={index} label={item.value} value={item.value} /> )
      })
    return (
        <View>
            <Picker
        style={{ height: 50, width: '100%' }}
        onValueChange={props.handleChange}
        >
        <Picker.Item label="Options"/>
            {items}
        </Picker>
        </View>
    )
}
