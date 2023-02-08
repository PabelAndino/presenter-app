import { View,Text, TextInput, ScrollView, StyleSheet } from 'react-native'
import { BlurView } from '@react-native-community/blur'
import React, { useLayoutEffect } from 'react'
import { MagnifyingGlassCircleIcon } from 'react-native-heroicons/solid'

import {
    FilmIcon,
    MagnifyingGlassIcon, VideoCameraIcon,

} from 'react-native-heroicons/outline'
import VideosList from '../components/VideosList'

const Videos = () => {
  return (
      <View style={styles.mainViewStyle}>
          <BlurView blurType='dark' blurAmount={20} style={styles.blurStyle}>
             
                {/* Video List */}
                <VideosList />
            
              {/* Top menu blur bar its located down here to get the blur effect on scroll for each video */}
              <BlurView blurType='dark' blurAmount={8} style={styles.blurTitleStyle}>
                  <View className='mt-2 items-center mb-2'>
                      <FilmIcon size={35} style={styles.videoIconStyle} color={'white'} />
                      <MagnifyingGlassCircleIcon size={28} style={styles.searchIconStyle} />
                  </View>

              </BlurView>

              {/* Images list */}

              
          </BlurView>
          
      </View>
  )
}

const styles = StyleSheet.create({
    blurTitleStyle: {
        width: 250,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
    },
    videoIconStyle: {
        width: 20,
        height: 30,
        shadowColor: '#91f24bde',
        shadowRadius: 7,
        shadowOpacity: 0.9
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
        marginTop:10,
        shadowColor: "#000",
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
        left: 25
    }
})
export default Videos