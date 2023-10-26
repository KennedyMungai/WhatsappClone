import { StyleSheet, TouchableOpacity, Text } from "react-native"
import colors from "../constants/colors"

const SubmitButton = ({ disabled, buttonTitle, onPress }) => {
    return (
        <TouchableOpacity
            style={
                [
                    styles.submitButtonTouchableOpacityStyles,
                    { backgroundColor: disabled ? colors.disabledBlue : colors.blue }
                ]
            }
            onPress={onPress}
        >
            <Text style={styles.submitButtonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    submitButtonTouchableOpacityStyles: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        borderRadius: 5,
        padding: 15,
        margin: 15
    },
    submitButtonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16
    }
})