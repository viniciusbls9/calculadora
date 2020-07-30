import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao(props) {
    const [flex, setFlex] = useState('1');

    return (
      <TouchableOpacity style={styles.area}>
        <Text style={styles.text}>sdfsf</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  area: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#e0e0e0',
  },
  text: {
    fontSize: 18
  },
});