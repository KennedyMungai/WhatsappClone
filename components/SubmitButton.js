import { StyleSheet, TouchableOpacity, Text } from "react-native"

const SubmitButton = () => {
    return (
        <TouchableOpacity style={styles.submitButtonTouchableOpacityStyles}>
            <Text>Click Me</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    submitButtonTouchableOpacityStyles: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})