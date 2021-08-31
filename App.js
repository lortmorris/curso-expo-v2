import React, {
  useState,
  useEffect,
} from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Header from './components/Header';
import Counter from './components/Counter';

export default function App() {
  console.info('running App');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.info('Arrancando la app, effect called');
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Text>By VisionGroup</Text>
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
