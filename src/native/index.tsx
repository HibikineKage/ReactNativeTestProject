import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FcFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default function render(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello World!</Text>
      <Text style={styles.instructions}>To get started, edit index.tsx</Text>
    </View>
  );
}
