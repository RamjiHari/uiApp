import React ,{useState} from 'react'
import { View, Text,StatusBar,Button } from 'react-native'
import styles from './RegFormstyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import { Dropdown } from 'react-native-material-dropdown';
import { RadioButton } from 'react-native-paper';
import Selector from './Selector';
import InputText from './InputText';
export default function RegForm() {
    const [state, setstate] = useState({
        fname:'', username: '', password: '',  phone_number: '', email: '',isSelected:false,selectedLanguage:'',selectedSubLanguage:'',isChecked:'first'
       })
       const[category,setCategory]= useState([
         {id: 1, value: "Java", othervalue: ""},
         {id: 2, value: "Php", othervalue: ""},
         {id: 3, value: "Jquery", othervalue: ""},
     ])
     const[subcategory,setsubCategory]= useState([
        {id: 1, sub_id:1, value: "Lesson1", othervalue: ""},
        {id: 2, sub_id:1, value: "Lesson2", othervalue: ""},
        {id: 3, sub_id:2,value: "Lesson3", othervalue: ""},
        {id: 4, sub_id:3,value: "Lesson4", othervalue: ""},
    ])
    const[ssubcategory,setssubCategory]= useState([
        {id: 1, sub_id:1, value: "Lesson1", othervalue: ""},
        {id: 2, sub_id:1, value: "Lesson2", othervalue: ""},
        {id: 3, sub_id:2,value: "Lesson3", othervalue: ""},
        {id: 4, sub_id:3,value: "Lesson4", othervalue: ""},
    ])
       const onChangeText = (key, val) => {

         setstate({
              ...state,
             [key]: val
         })

         if(key=="selectedLanguage"){
         setssubCategory([...subcategory.filter(e=>e.sub_id===val)])
         console.log(ssubcategory)
         console.log(subcategory)
         }
       }
       let items = category.map((item,index) => {
         return ( <Picker.Item key={index} label={item.value} value={item.value} /> )
       })
       if(1==1){
        var sitems = ssubcategory.map((item,index) => {
         return ( <Picker.Item key={index} label={item.value} value={item.value} /> )

       })


    }
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
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>

            <View animation="fadeInUpBig" style={styles.footer}>
                    <Text style={styles.text_footer}></Text>
                    <View style={styles.action}>
                    <InputText placeholder="fname"  handleText={val => onChangeText('fname', val)}/>
                    </View>
                    <View style={styles.picker}>
                    <InputText placeholder="fname"  handleText={val => onChangeText('fname', val)}/>
                    {/* <Selector data={category} handleChange={(itemValue, itemIndex) => onChangeText('selectedLanguage',itemValue)}/> */}
                    </View>
                    <View style={styles.action}>
                    <InputText placeholder="password"  handleText={val => onChangeText('password', val)}/>
                    </View>

            </View>
            <View animation="fadeInUpBig" style={styles.footer}>
                    <Text style={styles.text_footer}></Text>
                    <View style={styles.picker}>
                    <InputText placeholder="Username"  handleText={val => onChangeText('username', val)}/>
                    </View>
                    <View style={styles.action}>
                    <InputText placeholder="Email"    handleText={val => onChangeText('email', val)}/>
                    </View>
                    <View style={styles.action}>
                    <InputText placeholder="Phone Number"    handleText={val => onChangeText('phone_number', val)}/>
                    </View>

            </View>

            <View animation="fadeInUpBig" style={styles.footer}>
                    <Text style={styles.text_footer}></Text>
                    <View style={styles.picker}>
                        <Picker
                        selectedValue={state.selectedValue}
                        style={{ height: 50, width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => onChangeText('selectedLanguage',itemIndex)}
                        >
                        <Picker.Item label="Options"/>
                        {items}
                        </Picker>
                    </View>
                    <View style={styles.picker}>

                    <Picker
                        selectedValue={state.selectedValue}
                        style={{ height: 50, width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => onChangeText('selectedSubLanguage',itemIndex)}
                        >
                        <Picker.Item label="Options"/>
                        {sitems}
                        </Picker>
                        {/* <RadioButton.Group   onValueChange={val => onChangeText('isChecked',val)} value={state.isChecked}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                        <Text>First</Text>
                        <RadioButton value="first" />
                        <Text>Second</Text>
                        <RadioButton value="second" />
                        </View>
                        </RadioButton.Group> */}
                    </View>
                    <View style={styles.picker,{borderBottomWidth:0}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                        <CheckBox
                        value={state.isSelected}
                        onValueChange={val=>onChangeText('isSelected',val)}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Do you like React Native?</Text>
                        </View>
                        <Text>CheckBox is {state.isSelected ? "Checked" : "Unchecked"}</Text>
                    </View>
            </View>

            <Button
          title='Sign Up'
          onPress={signUp}
        />

        </View>
    )
}
