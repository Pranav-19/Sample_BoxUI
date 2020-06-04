import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Constants from 'expo-constants';


import Users from './components/Users'
export default class App extends React.Component {


  render(){
    return (
    <View style={styles.container}>
      <Users />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:10,
    paddingTop:Constants.statusBarHeight + 10,
    paddingBottom:10,
  },

});
