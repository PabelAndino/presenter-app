import { View, TextInput, ScrollView, StyleSheet } from 'react-native'
import { BlurView } from '@react-native-community/blur'
import React, { useLayoutEffect } from 'react'

import {
    MagnifyingGlassIcon,

} from 'react-native-heroicons/outline'

const Slides = () => {
    /* 
        <View className="flex-row items-center mt-5 mb-2 space-x-2 pl-4 w-44 h-10 bg-slate-900 rounded-xl">
    */
    return (
        <View style={styles.mainViewStyle}>
            <BlurView blurType='dark' blurAmount={20} style={styles.blurStyle}>

                <BlurView blurType='dark' blurAmount={20} style={styles.searchViewStyle}>
                    <View className='space-x-1 flex-row'>
                        <MagnifyingGlassIcon color="#dbdbdbff" />
                        <TextInput
                            placeholder="Search Slides here"
                            keyboardType="default"
                            placeholderTextColor="#dbdbdbff"
                            className='text-slate-100'
                        />
                    </View>

                </BlurView>


                <ScrollView className=" mb-5 ">
                    <View className="flex-row flex-wrap">
                        {/* <AllSlides imgUrl={back1} />
                <AllSlides imgUrl={back2} />
                <AllSlides imgUrl={back3} />
                <AllSlides imgUrl={back1} />
                <AllSlides imgUrl={back2} />
                <AllSlides imgUrl={back3} /> */}
                    </View>
                </ScrollView>
            </BlurView>

        </View>
    )
}

//mt-5 mb-2  pl-4 w-44 h-10 bg-slate-900 rounded-xl
const styles = StyleSheet.create({
    searchViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 2,
        paddingLeft: 4,
        width: 160,
        height: 35,
        borderRadius: 10,


    },

    blurStyle: {
        width: 238,
        height: 700,
        borderRadius: 24,
        alignItems: 'center',
        borderWidth: 0.2,
        borderColor: '#bafcfcba',


    },
    mainViewStyle: {
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

export default Slides