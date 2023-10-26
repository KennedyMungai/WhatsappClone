import { StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../constants/colors';

const Input = ({ style, label, IconPack, iconName, iconSize }) => {
    return (
        <View style={[styles.inputMainViewComponent, style]}>
            <Text style={styles.inputScreenLabelStyles} >{label}</Text>
            <View style={styles.inputMainViewInput} >
                {IconPack && <IconPack name={iconName} size={iconSize ?? 24} color={colors.lightGray} />}
                <TextInput style={styles.textInputStyles} placeholder='UserName' />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputMainViewComponent: {
        width: '100%',
        alignItems: 'center',
    },
    inputMainViewInput: {
        width: '100%',
        backgroundColor: colors.nearlyWhite,
        borderRadius: 5,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10
    },
    textInputStyles: {
        borderWidth: 1,
        borderColor: colors.gray,
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        fontSize: 16,
        fontFamily: 'regular',
        letterSpacing: 1
    },
    inputScreenLabelStyles: {
        fontSize: 24,
        padding: 10,
        margin: 10,
        color: colors.lightGray,
        fontWeight: 'bold',
        fontFamily: 'regular'
    }
})