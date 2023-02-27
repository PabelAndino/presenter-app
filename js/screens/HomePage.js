import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  MagnifyingGlassIcon,
  XCircleIcon,
  PhotoIcon,
  XMarkIcon,
  DocumentMinusIcon, InformationCircleIcon, WindowIcon, Cog6ToothIcon
} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import Images from '../views/Images'
import Videos from '../views/Videos'
import LinearGradient from 'react-native-linear-gradient'
import Slides from '../views/Slides'
import TopMenu from '../views/TopMenu'
import LivePresentation from '../views/LivePresentation'
import SlidesDetails from '../views/SlidesDetails'
import BottonMenu from '../views/BottonMenu'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { assignImageURL, createFoldersDirectories, readImagesFromFolder, showAllImages, showImageFolderDir } from '../../store/features/handleFolderSlice'
import { useEffect } from 'react'
import { useState } from 'react'
//from '../../store/features/handleFolderSlice'
const HomePage = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const imageDir = useSelector(showImageFolderDir)


  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })

  }, [])
  /* 
  bg-gradient-to-br from-gray-700 via-gray-900 to-black
  colors={['#621c75', '#391e62', '#2e1159', '#1a0834']}
  colors={['#ffffff',  '#fdfdfd']}
  */
  useEffect(() => {
    dispatch(assignImageURL())
    dispatch(createFoldersDirectories())
    if (imageDir) {
      dispatch(readImagesFromFolder(imageDir))
    }

  }, [imageDir])


  return (
    <>

      <LinearGradient colors={['#621c75', '#391e62', '#2e1159', '#1a0834']} style={style.mainViewStyle}>
        <View className="flex-row">
          {/* Left Side */}
          <View className=" mt-0">
            {/* Top Left Images List */}
            <Images />

            {/* Bottom Left  Videos List*/}
            <Videos />


          </View>

          {/* Center Side */}
          <View className="items-center pr-1 pl-1">
            {/* Top Center */}
            <TopMenu />


            {/* Live Presentation */}
            <LivePresentation />

            {/* Slides Details */}
            <SlidesDetails />

            {/* Bottom Menu */}
            <BottonMenu />


          </View>

          {/* Right Side */}
          <View className='' >
            <Slides />
          </View>


        </View>

      </LinearGradient>


    </>
  )
}

const style = StyleSheet.create({
  mainViewStyle: {
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 2,
    paddingRight: 2,
    flex: 1
  },
  safeAreaStyle: {

  }
})

export default HomePage
