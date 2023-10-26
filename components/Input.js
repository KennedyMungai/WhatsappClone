import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../constants/colors';

const Input = ({ style, label }) => {
    return (
        <View style={[styles.inputMainViewComponent, style]}>
            <Text>{label}</Text>
            <View style={styles.inputMainViewInput} >
                <FontAwesome5 name="user" size={24} color="black" />
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
        fontSize: 16
    }
})