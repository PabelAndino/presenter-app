import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { copyFiles, createFolder, readFolder, readFolders, readImageFolders, readVideoFolders } from "../../js/lib/files/fileActions"

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
            .addCase(readImagesFromFolder.fulfilled,(state,action)=>{
                state.imagesList = action.payload
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
          
          //const [{path}] = src
          return await copyFiles(src, dest)
          //console.log(dest)
        } catch (error) {
            console.log(error)
        }
    }
)

export const readImagesFromFolder = createAsyncThunk('readImagesFromFolder',
    async (data)=>{
        try {
            const imagesdir = await readFolder()
            const result = imagesdir.map(({path})=>path)
            return result
        } catch (error) {
            
        }
    }
)
export default folderHandleSlice.reducer



