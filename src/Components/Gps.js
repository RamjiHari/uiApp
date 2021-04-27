import React from 'react'
import { View, Text,Button} from 'react-native'
import Geolocation from 'react-native-location';

const permissionHandle = async () => {
    Geolocation.configure({
        distanceFilter: 5.0,
        desiredAccuracy: {
               ios: 'best',
               android: 'balancedPowerAccuracy',
        },
 });
 //trycatch block to catch any async errors
 ﻿try {
     //check for permissions
     const checkPerm = await Geolocation.checkPermission({
         ios: 'whenInUse',
         android: {
              detail: 'fine',
         },
     });
     //If not permission, ask for one
     if (!checkPerm) {
        const permGranted = await Geolocation.requestPermission({
               ios: 'whenInUse',
               android: {
                   detail: 'fine',
                   rationale: {
                      title: 'We need to access your location',
                      message: 'We use your location to show where you are on the map',
                      buttonPositive: 'OK',
                      buttonNegative: 'Cancel',
                   },
                },
            });
        if (!permGranted) {
            console.log('Permission not granted');
            throw Error('Permission not granted﻿');
        }
      }
      console.log(checkPerm,"chck")
       //Get the location information only with required permissions
       const position = await Geolocation.getLatestLocation();
       console.log(position,"perr")
       alert(JSON.stringify(position));
  } catch (error) {
          console.log('ERROR', error);
  }
  }
export default function Gps() {
    return (
        <View>
            <View style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
            <Button title="Get Location" onPress={()=>permissionHandle()}
 />
     </View>
     <Text>Latitude: </Text>
     <Text>Longitude: </Text>
     <View style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
       <Button
         title="Send Location"
        />
         </View>
        </View>
    )
}
