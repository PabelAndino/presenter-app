import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createFolder, readFolders, readImageFolders, readVideoFolders } from "../../js/lib/files/fileActions"

/* To get the file list we must have the Folders url first */
const initialState = {
    imagesList: [],
    videoList: [],
    imageFolderDir: [],
    videoFolderDir: [],
}

export const folderHandleSlice = createSlice({
    name: 'folders',
    initialState,
    reducers: {
        resetDefaults: (state, action) => {
            state.imagesList = []
            state.videoList = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(assignImageURL.fulfilled, (state, action) => {
                if (action.payload !== undefined) {
                    state.imageFolderDir = action.payload
                }

            })
            .addCase(assignVideoURL.fulfilled, (state, action) => {
                if (action.payload !== undefined) {
                    state.videoFolderDir = action.payload
                }
            })
    }
})


export const { resetDefaults } = folderHandleSlice.actions

export const showImageFolderDir = (state) => state.folders.imageFolderDir
export const showVideoFolderDir = (state) => state.folders.videoFolderDir
export const showAllImages = (state) => state.folders.imagesList
export const showAllVideos = (state) => state.folders.videoList

export const createFoldersDirectories = createAsyncThunk('createDirectories',
    async () => {
        try {
            await createFolder()

        } catch (error) {
            console.log(error)
        }
    }
)

export const assignImageURL = createAsyncThunk('assignImageURL',
    async () => {
        try {
            const response = await readImageFolders()
            return response
        } catch (error) {
            console.log(error)
        }
    }

)

export const assignVideoURL = createAsyncThunk('assignVideoURL',
    async () => {
        try {
            const response = await readVideoFolders()
            return response
        } catch (error) {
            console.log(error)
        }
    }

)

export const copyPhotoToFolder = createAsyncThunk('copyPhotoToFolder',
    async (data) =>{
        const {src, dest} = data
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

)
export default folderHandleSlice.reducer