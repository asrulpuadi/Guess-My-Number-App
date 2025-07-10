import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Colors from '../../constans/color'

const Card = ({children}) => {
    return (
        <View style={styles.card}>{children}</View>
    )
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, //on android
        shadowColor: 'black', //on android
        shadowOffset: {width:0, height: 2}, //on ios,
        shadowRadius: 6, //on ios,
        shadowOpacity: 0.25 //on ios
    },
})