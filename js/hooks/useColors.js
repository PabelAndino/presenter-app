import { useTheme } from 'native-base';

export default useColors = () => {
    const { colors } = useTheme();

    return {
        text: colors.text[900],
        primary: colors.primary[400],
        orange: colors.orange[600],
        white: colors.white,
    };
}


