import { View, Text, StyleSheet, Touchable } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.title}>DÖK Helper</Text>
      <View style={styles.seperator} />
      <View style={styles.button}>
        <Text style={styles.buttonText}>Program vezető</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Helper</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6A994E',
        alignItems: 'center',
        justifyContent:'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F2E8CF',
        textAlign: 'center',
        marginTop: 20,
    },
    seperator: {
        marginVertical: 8,
        borderBottomColor: '#F2E8CF',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
      backgroundColor: '#F2E8CF',
      width: 300,
      height: 150,
      padding: 20,
      margin: 20,
      borderRadius: 20,
      elevation: 3,
    },
    buttonText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#386641',
      textAlign: 'center',
    },
})

export default HomeScreen