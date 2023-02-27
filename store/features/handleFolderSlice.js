import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { copyFiles, createFolder, readFolder, readFolders, readImageFolders, readVideoFolders } from "../../js/lib/files/fileActions"

/* To get the file list we must have the Folders url first */
const initialState = {
    imagesList: [],
    videoList: [],
    imageFolderDir: [],
    videoFolderDir: [],
    loaded:false
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
                state.loaded = true
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
            let dir = ''
            for (let data of response){
                if(data){
                    dir = data
                }
            }
            //console.log('assign imgUrl', dir)
            return dir
        } catch (error) {
            console.log(error, ' Error assignImageURL')
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
    async (pathData)=>{
        try {
            const imagesdir = await readFolder(pathData)
            const result = imagesdir.map(({path})=>path)
            console.log(`The path ${pathData} `, result[0])
            return result
        } catch (error) {
            console.log(error, ' Error readImagesFromFolder')
        }
    }
)
export default folderHandleSlice.reducer



