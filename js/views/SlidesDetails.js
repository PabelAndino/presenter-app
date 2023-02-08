import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur'
import SlidesDetailList from '../components/SlidesDetailList'

const SlidesDetails = () => {
  return (
    <View style={styles.mainViewStyle}>
      <BlurView blurType='dark' blurAmount={20} style={styles.blurStyle}>
        <SlidesDetailList />
      </BlurView>

    </View>
  )
}


const styles = StyleSheet.create({
  blurStyle: {
    width: 520,
    height: 300,
    borderRadius: 24,
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: '#bafcfcba',

  },
  mainViewStyle: {
    marginTop: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 8,
      height: 5,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.19,

  }
})
export default SlidesDetails