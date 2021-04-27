import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent:'center',alignItems:'center',height:300 }}>
  <Text> First Screen</Text>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' ,height:300}} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' ,height:300}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third:ThirdRoute
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' }
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}