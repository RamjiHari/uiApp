import React, {Component} from 'react';
import { StyleSheet, View,Text, SafeAreaView} from 'react-native';
import Accordian from './Accordian'
import { Colors } from './Colors';

const Collapsible = () => {
    const menu=[
        {
            id:'1',
          title: '1,000,000 UGX',
          date:'16-Mar-21',
          data: [
            {Float:'1,000,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:true},
          ]
        },
        {
            id:'2',
            title: '500,000 UGX',
            date:'3-Mar-21',
          data: [
            {Float:'500,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:false},
          ]
        },
        {
            id:'3',
         title: '1,000,000 UGX',
         date:'25-Feb-21',
         data: [
            {Float:'1,000,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:false},
          ]
        },
        {
            id:'4',
            title: '1,000,000 UGX',
            date:'19-Feb-21',
          data: [
            {Float:'1,000,000 UGX', Fee:'12,000 UGX',TopupDate:'16-Mar-21',Duration:'3 Days',Status:'Ongoing',value:false},
          ]
        },
      ]
    const  renderAccordians=()=> {
        const items = [];
        for (item of menu) {
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
        <SafeAreaView style={styles.container}>
        <Text style={{paddingTop:10,fontWeight:'bold',fontSize:22,textAlign:'center'}}>
        Past Topups
      </Text>
         {renderAccordians() }
      </SafeAreaView>
     );
}

export default Collapsible;

const styles = StyleSheet.create({
    container: {
     flex:1,
     marginTop:10,
    //  backgroundColor:Colors.PRIMARY,

    }
  });