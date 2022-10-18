import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.topBoxColumn1}>
          <Text style={styles.oIcon}>O</Text>
        </View>
        <View style={styles.topBoxColumn2}>
          <Text style={styles.oIcon}>O</Text>
        </View>
        <View style={styles.topBoxColumn3}>
          <Text style={styles.xIcon}>X</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.middleBoxColumn1}>
          <Text style={styles.xIcon}>X</Text>
        </View>
        <View style={styles.middleBoxColumn2}>
          <Text style={styles.oIcon}>O</Text>
        </View>
        <View style={styles.middleBoxColumn3}>
          <Text style={styles.oIcon}>O</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.bottomBoxColumn1}>
          <Text style={styles.xIcon}>X</Text>
        </View>
        <View style={styles.bottomBoxColumn2}>
          <Text style={styles.xIcon}>X</Text>
        </View>
        <View style={styles.bottomBoxColumn3}>
          <Text style={styles.oIcon}>O</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '25%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc'
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  xIcon: {
    color: 'red',
    fontSize: 120,
  },
  oIcon: {
    color: 'blue',
    fontSize: 120,
  },
  topBoxColumn1: {
    width: '30%',
    height: '100%',
    borderRightWidth: 7,
    borderRightColor: 'maroon',
    borderBottomWidth: 7,
    borderBottomColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBoxColumn2: {
    width: '30%',
    height: '100%',
    borderRightWidth: 7,
    borderRightColor: 'maroon',
    borderBottomWidth: 7,
    borderBottomColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBoxColumn3: {
    width: '30%',
    height: '100%',
    borderBottomWidth: 7,
    borderBottomColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleBoxColumn1: {
    width: '30%',
    height: '100%',
    borderRightWidth: 7,
    borderRightColor: 'maroon',
    borderBottomWidth: 7,
    borderBottomColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleBoxColumn2: {
    width: '30%',
    height: '100%',
    borderRightWidth: 7,
    borderRightColor: 'maroon',
    borderBottomWidth: 7,
    borderBottomColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleBoxColumn3: {
    width: '30%',
    height: '100%',
    borderBottomWidth: 7,
    borderBottomColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBoxColumn1: {
    width: '30%',
    height: '100%',
    borderRightWidth: 7,
    borderRightColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBoxColumn2: {
    width: '30%',
    height: '100%',
    borderRightWidth: 7,
    borderRightColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBoxColumn3: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
