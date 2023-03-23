import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import HomeScreen from '../screens/HomeScreen';

const BottomTabBar: NavigationFunctionComponent = () => {
  const [homePage, setHomePage] = useState();

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.body}>
        <Text>Crate Bottom nav bar</Text>
      </View>
      <View style={styles.BottomTabBar}>
        <View style={(styles.homeTab, styles.tabCommon)}>
          <Button title="Home" />
        </View>
        <View style={(styles.featureTab, styles.tabCommon)}>
          <Button title="Featured" />
        </View>
        <View style={(styles.settingTab, styles.tabCommon)}>
          <Button title="Setting" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  BottomTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    height: 50,
  },
  tabCommon: {
    backgroundColor: '#5002',
    elevation: 2,
    shadowOpacity: 0.2,
    borderRadius: 10,
  },
  homeTab: {},
  featureTab: {},
  settingTab: {},
});
