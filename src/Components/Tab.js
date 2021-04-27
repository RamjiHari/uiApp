import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
  ImageBackground,
  ScrollView
} from "react-native";
import Accordian from "./Accordian";

import styles from './TabStyle';
const listTab=[{finish_status:'All',head:'All'},{finish_status:1,head:'1 Day'},{finish_status:2,head:'2-3 Days'},{finish_status:3,head:'4-5 Days'},{finish_status:4,head:'6-11 Days'},{finish_status:5,head:'11-20 Days'}]

const ProfileScreen =(props)=>{
const [finish_status,setStatus]=useState('All')

const [updated, setUpdated] = useState(false)


const [datalist,setDataList]=useState([
    {
        id:'1',
      title: '1,000,000 UGX',
      date:'16-Mar-21',
      finish_status:1,
      data: [
        {Float:'1,000,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:true},
      ]
    },
    {
        id:'2',
        title: '500,000 UGX',
        date:'3-Mar-21',
        finish_status:2,
      data: [
        {Float:'500,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:false},
      ]
    },
    {
        id:'3',
     title: '1,000,000 UGX',
     date:'25-Feb-21',
     finish_status:3,
     data: [
        {Float:'1,000,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:false},
      ]
    },
    {
        id:'4',
        title: '1,000,000 UGX',
        date:'19-Feb-21',
        finish_status:4,
      data: [
        {Float:'1,000,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:false},
      ]
    },
  ])
const [data,getCourse]=useState([
    {
        id:'1',
      title: '1,000,000 UGX',
      date:'16-Mar-21',
      finish_status:1,
      data: [
        {Float:'1,000,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:true},
      ]
    },
    {
        id:'2',
        title: '500,000 UGX',
        date:'3-Mar-21',
        finish_status:2,
      data: [
        {Float:'500,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:false},
      ]
    },
    {
        id:'3',
     title: '1,000,000 UGX',
     date:'25-Feb-21',
     finish_status:3,
     data: [
        {Float:'1,000,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:false},
      ]
    },
    {
        id:'4',
        title: '1,000,000 UGX',
        date:'19-Feb-21',
        finish_status:4,
      data: [
        {Float:'1,000,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:false},
      ]
    },
  ])





const setStatusFilter=finish_status=>{
  if(finish_status!="All"){

    setDataList([...data.filter(e=>e.finish_status===finish_status)])
  }else{
    setDataList(data)
  }
  setStatus(finish_status)
}
const  renderAccordians=()=> {
    const items = [];
    for (item of datalist) {
        items.push(
            <Accordian
                title = {item.title}
                date = {item.date}
                data = {item.data}
            />
        );
    }
    return items;
}
return (

<SafeAreaView style={styles.containers}>
<Text style={{paddingTop:10,fontWeight:'bold',fontSize:22,textAlign:'center'}}>
        FAs Overdue
      </Text>
<ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false} >

<View style={styles.listTab}>
{
  listTab.map(e=>


  <TouchableOpacity
  key={e.head}
  style={[styles.btnTab,finish_status===e.finish_status && styles.btnTabActivate]}
  onPress={()=>setStatusFilter(e.finish_status)}>
    <Text style={[styles.textTab,finish_status===e.finish_status && styles.txtTabActivate]}>{e.head}</Text>
  </TouchableOpacity>)
}
</View>
</ScrollView>


         {renderAccordians() }


</SafeAreaView>
)
}


export default ProfileScreen;