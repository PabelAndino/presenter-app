import { View, TextInput, StyleSheet, ScrollView, Text, ActionSheetIOS } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { BlurView } from '@react-native-community/blur'

import {
  CogIcon,
 PhotoIcon, PresentationChartBarIcon,

} from 'react-native-heroicons/outline'
import { MagnifyingGlassCircleIcon } from 'react-native-heroicons/solid'

import ImagesList from '../components/ImagesList'
import ScreenWrapper from '../components/ScreenWrapper'
import { Actionsheet, Divider, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { pickImages } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { assignImageURL, assignVideoURL, createFoldersDirectories, showAllImages, showImageFolderDir, showVideoFolderDir } from '../../store/features/handleFolderSlice'

const Images = ({ imgUrl }) => {
  const [showFilesActions, setShowFilesActions] = useState(false);
  const [imagePath, setiMagePath] = useState([])
  const dispatch = useDispatch()
  const videDir = useSelector(showVideoFolderDir)
  const imageDir = useSelector(showImageFolderDir)
  const imageList = useSelector(showAllImages)

  const handleOpenImageSheet = async () =>{
   
    const imagesData = await pickImages()

    console.log(imagesData)
  }

  const createDirectories = () =>{
    dispatch(createFoldersDirectories())
  }
  const testDirLoad = () =>{
    console.log(imageDir[1])
    console.log(videDir[0])

  }

  const assignFolderToState = () =>{
    dispatch(assignImageURL())
    dispatch(assignVideoURL())
  }

  const testLoadImages = () => {
    console.log(imageList)
  }

  return (
    <ScreenWrapper>
      <View style={styles.mainViewStyle}>
        <BlurView blurType='dark' blurAmount={20} style={styles.blurStyle}>

          {/* Images list */}
          <ImagesList />

          {/* Top menu blur bar its located down here to get the blur effect on scroll for each image */}

            <BlurView blurType='dark' blurAmount={8} style={styles.blurTitleStyle} >
            <TouchableOpacity className='mt-2 items-center mb-2' onPress={() => setShowFilesActions(true)} >
                <PhotoIcon size={35} style={styles.imageIconStyle}  />
                <MagnifyingGlassCircleIcon size={28} style={styles.searchIconStyle} />
              </TouchableOpacity>

            </BlurView>



        </BlurView>
      </View>


      <Actionsheet className='pl-[200] pr-[200]'  isOpen={showFilesActions} onClose={() => setShowFilesActions(false)}>
        <Actionsheet.Content >
          
          <Actionsheet.Item onPress={handleOpenImageSheet} >
            <View className='flex-row space-x-2  items-center '>
              <PhotoIcon size={30} color={'gray'}  />
              <Text className='text-slate-800 font-medium'>Pick Images</Text>
            </View>
          </Actionsheet.Item>

          <Divider />
          <Actionsheet.Item onPress={createDirectories} >
            <View className='flex-row space-x-2  items-center '>
              <CogIcon size={30} color={'gray'} />
              <Text className='text-slate-800 font-medium'>Create Directories</Text>
            </View>
          </Actionsheet.Item>

          <Actionsheet.Item onPress={assignFolderToState} >
            <View className='flex-row space-x-2  items-center '>
              <PresentationChartBarIcon size={30} color={'gray'} />
              <Text className='text-slate-800 font-medium'>Assign Folder Image to state</Text>
            </View>
            
          </Actionsheet.Item>

          <Actionsheet.Item onPress={testDirLoad} >
            <View className='flex-row space-x-2  items-center '>
              <PresentationChartBarIcon size={30} color={'gray'} />
              <Text className='text-slate-800 font-medium'>Print image Folder dir</Text>
            </View>
          </Actionsheet.Item>

          <Actionsheet.Item onPress={testLoadImages} >
            <View className='flex-row space-x-2  items-center '>
              <PresentationChartBarIcon size={30} color={'gray'} />
              <Text className='text-slate-800 font-medium'>Get all images</Text>
            </View>
          </Actionsheet.Item>

        </Actionsheet.Content>
      </Actionsheet>
    </ScreenWrapper>



  )
}

const styles = StyleSheet.create({

  imageIconStyle: {
    width: 20,
    height: 30,
    color:'#ffffffde',
    shadowColor:'#91f24bde',
    shadowRadius:7,
    shadowOpacity:0.9
    /* cf85e1ce */

  },
  blurTitleStyle: {
    width: 250,
    alignItems: 'center',
    position: 'absolute',
    top: 0,

  },
  blurStyle: {
    width: 250,
    height: 330,
    borderRadius: 24,
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: '#bafcfcba',

  },
  mainViewStyle: {

    shadowColor: "#000000ba",
    shadowOffset: {
      width: 8,
      height: 5,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.19,

  },
  searchIconStyle: {
    color: '#91f24bde',
    shadowColor: '#91f24bde',
    shadowRadius: 7,
    shadowOpacity: 0.9,
    position: 'absolute',
    top: 13,
    left:25
  }
})

export default Images