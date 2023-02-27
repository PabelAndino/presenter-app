import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { back1, back2, back4 } from '../lib/files/LocalImages'


import { useDispatch, useSelector } from 'react-redux'
import { readImagesFromFolder, showAllImages, showImageFolderDir } from '../../store/features/handleFolderSlice'
import ImageListDetails from './ImageListDetails'
import { Spinner } from 'native-base'
import { useLayoutEffect } from 'react'



const ImagesList = () => {
    const dispatch = useDispatch()
    const imageDir = useSelector(showImageFolderDir)
    const imageList = useSelector(showAllImages)
    const loaded = useSelector((state) => state.folders.loaded)

    useLayoutEffect(()=>{
        
        //console.log(imageDir, ['Image Dir'])
    },[])
    useEffect(() => {
        
    }, [loaded])




    return (
        <View style={style.mainViewStyle}>
            <ScrollView>
                <View className={'pt-0'}>

                    {
                        imageList ?
                            imageList.map((data, index) =>
                                <ImageListDetails key={index} img={data} />
                            ) :
                            (
                                <View style={style.spinnerStyle}>
                                    <Spinner size="lg" color='cyan.500' />
                                </View>
                            )
                    }


                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    mainViewStyle: {
        width: 460,
        height: 280,
        display: 'flex',
        borderRadius: 50,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },

    itemsShadowViewStyle: {
        width: 200,
        height: 113,
        borderRadius: 16,
        position: 'absolute',
        top: 19,
        left: 8

    },
    textStyle: {
        color: 'white'
    },
    imageStyle: {
        width: 200,
        height: 113,
        borderRadius: 16,
        marginBottom: 8
    },

    spinnerStyle: {
        marginTop: 100,
        alignContent: 'center',
        width: '100%',
        padding: 5,
    }

})

export default ImagesList
