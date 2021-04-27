import React from 'react'
import { View, TextInput,StyleSheet } from 'react-native'

export default function Input(props) {
    return (
        <View>
            <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          autoCapitalize="none"
          placeholderTextColor='white'
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.handleText}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#42A5F5',
      margin: 10,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    },
    checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
  })
