import { View, StyleSheet, Text, TextInput } from 'react-native'

const Input = ({ style, label }) => {
    return (
        <View style={[styles.inputMainViewComponent, style]}>
            <Text>{label}</Text>
            <View>
                <TextInput style={styles.inputMainViewInput} />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputMainViewComponent: {
        width: '100%'
    },
    inputMainViewInput: {
        width: '100%',
        backgroundColor: '#f85',
        borderRadius: 5,
        paddingHorizontal: 10
    }
})