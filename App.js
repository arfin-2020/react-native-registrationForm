import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationForm from './components/RegistrationForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.registration}>Ragistration</Text>
      <RegistrationForm/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  registration:{
    fontSize:20,
    marginLeft:20,
    marginBottom:30,
  }
});
