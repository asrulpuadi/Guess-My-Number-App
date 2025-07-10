import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constans/color'

const GuessLogItem = ({roundNumber, guess}) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4, //box shadow android
        shadowColor: 'black', //box shadow ios
        shadowOffset: {width: 0, height: 0},//box shadow ios
        shadowOpacity: 0.25,//box shadow ios
        shadowRadius: 3//box shadow ios
    },
    itemText: {
        fontFamily: 'open-sans'
    }
})