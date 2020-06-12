import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    }
})

export default props => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableOpacity>
    )
}