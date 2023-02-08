import { StatusBar } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import useColors from '../hooks/useColors'

export default function ScreenWrapper({ children }) {
    const colors = useColors()
    const { top } = useSafeAreaInsets()
    return (
        <SafeAreaView       
        >
            
            
            {children}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    mainViewStyle:{
        top:0
    }
})