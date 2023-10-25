import { View, StyleSheet } from 'react-native'

const Input = ({ style, children }) => {
    return (
        <View style={[styles.inputMainViewComponent, style]}>
            {children}
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputMainViewComponent: {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff'
    }
})