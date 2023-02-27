import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import ImageColors from 'react-native-image-colors'

const initialState = {
    colorOne: { value: '', name: '' },
    rawResult: '',
}

export default function ImageListDetails({img}) {
    const [colors, setColors] = useState(initialState)
    const [loading, setLoading] = useState(true)

    const styleShadow = StyleSheet.create({
        itemsViewStyle: {
            width: '100%',
            padding: 5,
            shadowColor: loading ? '' : colors.colorOne.value,
            shadowOffset: {
                width: 1,
                height: 0.8,
            },
            shadowOpacity: 0.8,
            shadowRadius: 5,

        },
    })
    useEffect(() => { 
        const fetchColors = async () => {
            const result = await ImageColors.getColors(img, {
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
        <View style={styleShadow.itemsViewStyle} >
            <Image  source={{ uri: img }} style={style.imageStyle} />
        </View>
    )
}

const style = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 113,
        borderRadius: 16,
        marginBottom: 8
    },

})