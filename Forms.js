import React,{useState} from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import Input from './Components/Input';
import Selector from './Components/Selector';
export default function Forms() {

    const [state, setstate] = useState({
       fname:'', username: '', password: '',  phone_number: '', email: '',isSelected:false,selectedLanguage:'',isChecked:'first'
      })
      const[category,setCategory]= useState([
        {id: 1, value: "Java", othervalue: ""},
        {id: 2, value: "Php", othervalue: ""},
        {id: 3, value: "Jquery", othervalue: ""},
    ])
      const onChangeText = (key, val) => {

        setstate({
             ...state,
            [key]: val
        })
      }
      let items = category.map((item,index) => {
        return ( <Picker.Item key={index} label={item.value} value={item.value} /> )
      })
      const signUp = async () => {

        try {
          // here place your signup logic
          console.log('user successfully signed up!: ', state)
        } catch (err) {
          console.log('error signing up: ', err)
        }
      }
    return (
        <View style={styles.container}>
        <Input placeholder="fname"  handleText={val => onChangeText('fname', val)}/>
        <Input placeholder="Username"  handleText={val => onChangeText('username', val)}/>
        <Input placeholder="Password" secureTextEntry={true}  handleText={val => onChangeText('password', val)}/>
        <Input placeholder="Email"    handleText={val => onChangeText('email', val)}/>
        <Input placeholder="Phone Number"    handleText={val => onChangeText('phone_number', val)}/>
        <Selector data={category} handleChange={(itemValue, itemIndex) => onChangeText('selectedLanguage',itemValue)}/>
        <Picker
        selectedValue={state.selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => onChangeText('selectedLanguage',itemValue)}
        >
        <Picker.Item label="Options"/>
            {items}
        </Picker>


<View style={styles.checkboxContainer}>
        <CheckBox
          value={state.isSelected}
          onValueChange={val=>onChangeText('isSelected',val)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
        <Text>CheckBox is {state.isSelected ? "Checked" : "Unchecked"}</Text>
      </View>

        <RadioButton.Group   onValueChange={val => onChangeText('isChecked',val)} value={state.isChecked}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>First</Text>
                <RadioButton value="first" />
                <Text>Second</Text>
                <RadioButton value="second" />
                </View>
        </RadioButton.Group>


        <Button
          title='Sign Up'
          onPress={signUp}
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
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
  })
