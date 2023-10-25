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
        width: '100%'
    }
})