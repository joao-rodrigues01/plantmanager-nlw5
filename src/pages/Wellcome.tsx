import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';

import colors from '../styles/colors';
import watering from '../assets/watering.png';
import Button from '../components/Button';

export function Wellcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} 
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={watering} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button title=">" />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  image: {
    width: 292,
    height: 284
  },
});