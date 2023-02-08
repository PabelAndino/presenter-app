import FS from 'react-native-fs'

export const documentPath = FS.DocumentDirectoryPath
export const localFolder = `${documentPath}/Lyricshow`
export const videoFolderName = 'video';
export const imagesFolderName = 'images';
export const videoFolder = `${localFolder}/${videoFolderName}`;
export const imagesFolder = `${localFolder}/${imagesFolderName}`;

export const legacyVideoFolder = `${documentPath}/${videoFolderName}`;
export const legacyImagesFolder = `${documentPath}/${imagesFolderName}`;

export const platforms = {
    ios: 'ios',
    android: 'android',
};