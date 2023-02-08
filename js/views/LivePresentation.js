import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur'

const LivePresentation = () => {
    return (
        <View style={styles.mainViewStyle}>
            <BlurView blurType='dark' blurAmount={20} style={styles.blurStyle}>

            </BlurView>
            {/* <MainSlide imgUrl={back1} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    blurStyle: {
        width: 520,
        height: 295,
        borderRadius: 24,
        alignItems: 'center',
        borderWidth: 0.2,
        borderColor: '#bafcfcba',

    },
    mainViewStyle: {
        marginLeft: 2,
        marginTop: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 5,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.19,

    }
})
export default LivePresentation