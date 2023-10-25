import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ImageBackground, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/images/chat_background.jpeg')}
            style={styles.imageBackgroundStyle}
        >
            <SafeAreaView style={styles.chatView}>
                <View style={styles.chatAreaView}></View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => console.log("Something in the way")}>
                        <FontAwesome5 name="image" size={24} color="#8A8D91" />
                    </TouchableOpacity>
                    <TextInput />
                    <TouchableOpacity onPress={() => console.log("Something in the way")}>
                        <FontAwesome name="camera" size={24} color="#8A8D91" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    chatView: {
        flex: 1,
        flexDirection: 'column'
    },
    imageBackgroundStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    chatAreaView: {
        flex: 1
    }
})
