import FS from 'react-native-fs'
import { imagesFolder, legacyImagesFolder, legacyVideoFolder, localFolder, videoFolder } from './constants'


export const makeFolders = async () => {
    const localFolderExist = await FS.exists(localFolder)
    const imagesFolderExist = await FS.exists(imagesFolder)
    const videoFolderExist = await FS.exists(videoFolder)
    const legacyImageFolderExist = await FS.exists(legacyImagesFolder)
    const legacyVideoFolderExist = await FS.exists(legacyVideoFolder)

    if (!localFolderExist) {
        await FS.mkdir(localFolder)
    }

    if (!imagesFolderExist) {
        await FS.mkdir(imagesFolder)
    }
    if (!videoFolderExist) {
        await FS.mkdir(videoFolder)
    }

    if (legacyImageFolderExist) {
        console.log('Move Folder Action Legacy Image Folder')
    }

    if (legacyVideoFolderExist) {
        console.log('Move Folder Action Legacy Video Folder')
    }



}

export const createFolder = async () => {
    await makeFolders();
}

export const readImageFolders = async () => {

    const folders = await FS.readDir(localFolder);
    const dir = folders.filter(n => n.isDirectory()).sort((a, b) => new Date(b.mtime).getTime() - new Date(a.mtime).getTime())
        ?? 'No data to show';

    return dir.map(data => {
        if (data.name === 'images') {
            return data.path
        }
    })

}

export const readVideoFolders = async () => {

    const folders = await FS.readDir(localFolder);
    const dir = folders.filter(n => n.isDirectory()).sort((a, b) => new Date(b.mtime).getTime() - new Date(a.mtime).getTime())
        ?? 'No data to show';

    return dir.map(data => {
        if (data.name === 'video') {
            return data.path
        }
    })

}

export const copyFiles = async (src, dest) => {
    try {
        const exists = await FS.exists(dest)
        if(exists){
            console.log('Exist')
        }
        await FS.copyFile(src, dest)
    } catch (error) {
        console.log(error)
    }
}

export async function readFolder(path) {
    //const path = '/Users/pabel/Library/Developer/CoreSimulator/Devices/40C2ACDE-7454-4E2E-AB68-F6EE46077C04/data/Containers/Data/Application/F1D60F49-E78D-4F35-AA40-E59CC565CAF2/Documents/Lyricshow/images'
    try {
        const result = await FS.readDir(path);
        return result
    } catch (e) {
        console.log('read folder failed', e);
        return [];
    }
}
