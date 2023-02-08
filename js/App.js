import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import Video from './Video'
import SimpleTextInterval from './SimpleTextInterval'
import Modal from './Modal'
import ScreenSize from './ScreenSize'
import ScrollView from './ScrollView'
import HomePage from './screens/HomePage'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import { store } from '../store/store'

const Stack = createStackNavigator()

const options = {
  headerTitleAlign: 'center',
  headerStyle: { backgroundColor: 'white' },
  headerTitleStyle: { color: 'black' },
}


function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Video" component={Video} options={options} />
            <Stack.Screen
              name="SimpleTextInterval"
              component={SimpleTextInterval}
              options={options}
            />
            <Stack.Screen name="Modal" component={Modal} options={options} />
            <Stack.Screen
              name="ScreenSize"
              component={ScreenSize}
              options={options}
            />
            <Stack.Screen
              name="ScrollView"
              component={ScrollView}
              options={options}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  )
}

export default App
