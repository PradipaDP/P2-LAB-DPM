import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.textCenter}>Teks di Tengah Layar</Text>
      
      {/* Dua kotak di bawah teks */}
      <View style={styles.flexContainer}>
        <View style={[styles.box, styles.boxLeft]} />
        <View style={[styles.box, styles.boxRight]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 20,
  },
  flexContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '60%',
  },
  box: {
    width: 100,
    height: 100,
  },
  boxLeft: {
    backgroundColor: 'red', 
  },
  boxRight: {
    backgroundColor: 'green', 
  },
});
