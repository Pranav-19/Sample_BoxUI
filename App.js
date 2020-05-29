import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import BoxList from './components/BoxList'


export default function App() {
  return (
    <View style={styles.container}>
      <BoxList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:5,
    alignItems:'center',
    paddingTop:Constants.statusBarHeight + 10,
    paddingBottom:10,
  },
});
