import { StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../constants/colors';

const Input = ({ style, label, IconPack, iconName, iconSize, errorText, placeholder }) => {
    return (
        <View style={[styles.inputMainViewComponent, style]}>
            <Text style={styles.inputScreenLabelStyles} >{label}</Text>
            <View style={styles.inputMainViewInput} >
                {IconPack && <IconPack name={iconName} size={iconSize ?? 24} color={colors.lightGray} />}
                <TextInput style={styles.textInputStyles} placeholder={placeholder} />
            </View>
            {
                errorText && <View style={styles.inputScreenErrorContainerStyles}>
                    <Text style={styles.inputScreenErrorText}>{errorText}</Text>
                </View>
            }
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
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        fontSize: 16,
        fontFamily: 'regular',
        letterSpacing: 1,
        backgroundColor: colors.white
    },
    inputScreenLabelStyles: {
        fontSize: 16,
        padding: 10,
        // margin: 10,
        color: colors.lightGray,
        fontWeight: 'bold',
        fontFamily: 'regular'
    },
    inputScreenErrorContainerStyles: {
        marginTop: 5
    },
    inputScreenErrorText: {
        fontSize: 16,
        color: colors.errorRed,
        fontWeight: 'bold'
    }
})