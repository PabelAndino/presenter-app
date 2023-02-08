import { View, StyleSheet } from 'react-native'
import React from 'react'

import {

    XCircleIcon,
    PhotoIcon,
    XMarkIcon,
    DocumentMinusIcon,
} from 'react-native-heroicons/outline'
import { BlurView } from '@react-native-community/blur'

const TopMenu = () => {
    return (
        <View style={styles.shadowView}>
            <BlurView blurType='dark' blurAmount={20} style={styles.blurStyle}>
                <View className="flex-row items-center flex-1 justify-between space-x-20 ">
                <XCircleIcon size={40} color="white" />
                <PhotoIcon size={40} color="white" />
                <View className="absolute left-[70px] top-9">
                    <XMarkIcon size={14} color="white" />
                </View>
                <DocumentMinusIcon size={40} color="white" />
            </View>
            </BlurView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    blurStyle: {
        width: 400,
        height: 50,
        borderRadius: 24,
        alignItems: 'center',
        borderWidth: 0.2,
        borderColor: '#bafcfcba',

    },
    shadowView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 5,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.19,

    }
})

export default TopMenu