import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
  InformationCircleIcon, WindowIcon, Cog6ToothIcon
} from 'react-native-heroicons/outline'
import { BlurView } from '@react-native-community/blur'

const BottonMenu = () => {
  /* 
  <View className="flex-row items-center flex-1 justify-between space-x-20 ">
  */
  return (
    <View style={styles.shadowView}>
      <BlurView blurType='dark' blurAmount={20} style={styles.blurStyle}>
        <View className="flex-row items-center flex-1 justify-between space-x-20 ">
          <InformationCircleIcon size={40} color="white" />
          <WindowIcon size={40} color="white" />
          <Cog6ToothIcon size={40} color="white" />
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
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 8,
      height: 5,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.19,

  }
})
export default BottonMenu