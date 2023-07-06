import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProgramPage = () => {
  return (
    <View>
      <Text style={styles.title}>DÖK Helper Program Page</Text>
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
})

export default ProgramPage