import { launchImageLibrary } from 'react-native-image-picker'
export const pickImages = async () => {
    try {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            selectionLimit: 1,
            includeBase64: false
        })

        if (result?.assets) {
            return result?.assets.map(f => ({
                type: f.type,
                name: f.fileName,
                size: f.fileSize,
                path: extractFilePath(f.uri),
                uri: f.uri,
            }));
        }
        return [];
    } catch (error) {
        console.log('pick images failed', error);
        return [];
    }
}

export function extractFilePath(path) {
    if (path.startsWith('file:///')) {
        return path.slice(7);
    } else if (path.startsWith('file://')) {
        return path.slice(6);
    } else if (path.startsWith('file:/')) {
        return path.slice(5);
    }
    return path;
}
