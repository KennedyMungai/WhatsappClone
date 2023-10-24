import { View, Text, StyleSheet } from 'react-native'

const Settings = () => {
    return (
        <View style={styles.chatScreenView}>
            <Text>Chat Settings Screen</Text>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    chatScreenView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

