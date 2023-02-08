import { configureStore } from '@reduxjs/toolkit'
import handleFolderSlice from './features/handleFolderSlice'

export const store = configureStore({
    reducer: {
        folders: handleFolderSlice,
    }
})