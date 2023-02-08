// @flow

import React from 'react'
import { View, Button } from 'react-native'

type Props = {
  navigation: {
    push: Function,
  },
}

export default function Home(props: Props) {
  const { navigation } = props
  return (
    <View
      className="bg-slate-400"
      /* style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }} */
    >
      <Button
        title="SimpleTextInterval"
        onPress={() => navigation.push('SimpleTextInterval')}
      />
      <Button title="Video" onPress={() => navigation.push('Video')} />
      <Button title="Modal" onPress={() => navigation.push('Modal')} />
      <Button
        title="ScreenSize"
        onPress={() => navigation.push('ScreenSize')}
      />
      <Button
        title="ScrollView"
        onPress={() => navigation.push('ScrollView')}
      />
    </View>
  )
}
