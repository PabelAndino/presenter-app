import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { back1, back2, back4 } from '../lib/files/LocalImages'
import { BlurView } from '@react-native-community/blur'
import ImageColors from 'react-native-image-colors'

const initialState = {
    colorOne: { value: '', name: '' },
    rawResult: '',
}

const VideosList = () => {
    const [colors, setColors] = useState(initialState)
    const [loading, setLoading] = useState(true)

    const styleShadow = StyleSheet.create({
        itemsViewStyle: {
            width: '100%',
            padding: 5,
            shadowColor: loading ? '' : colors.colorOne.value,
            shadowOffset: {
                width: 2,
                height: 0.8,
            },
            shadowOpacity: 1,
            shadowRadius: 3,

        },
    })

    useEffect(() => {
        const fetchColors = async () => {
            const result = await ImageColors.getColors(back4, {
                fallback: '#000000',
                quality: 'low',
                pixelSpacing: 5,
                cache: true,
                headers: {
                    authorization: 'Basic 123',
                },
            })

            switch (result.platform) {
                case 'ios':
                    setColors({
                        colorOne: { value: result.background, name: 'background' },
                        colorTwo: { value: result.detail, name: 'detail' },
                        colorThree: { value: result.primary, name: 'primary' },
                        colorFour: { value: result.secondary, name: 'secondary' },
                        rawResult: JSON.stringify(result),
                    })
                    break
                default:
                    throw new Error('Unexpected platform')
            }

            setLoading(false)
        }

        fetchColors()
    }, [])
    return (
        <View style={style.mainViewStyle}>
            <ScrollView>
                <View className={'pt-12'}>
                    <View style={styleShadow.itemsViewStyle} >

                        <Image source={back4} style={style.imageStyle} />
                    </View>
                    <View style={styleShadow.itemsViewStyle} >

                        <Image source={back4} style={style.imageStyle} />
                    </View>
                    <View style={styleShadow.itemsViewStyle} >

                        <Image source={back4} style={style.imageStyle} />
                    </View>
                    <View style={styleShadow.itemsViewStyle} >

                        <Image source={back4} style={style.imageStyle} />
                    </View>



                </View>
            </ScrollView>


        </View>
    )
}

const style = StyleSheet.create({
    mainViewStyle: {

        marginTop: 10,

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


    }
})

export default VideosList