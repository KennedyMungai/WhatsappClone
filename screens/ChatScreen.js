import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ImageBackground, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';

const ChatScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/images/chat_background.jpeg')}
            style={styles.imageBackgroundStyle}
        >
            <SafeAreaView style={styles.chatView}>
                <View style={styles.chatAreaView}></View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => console.log("Images")}>
                        <FontAwesome5 name="image" size={24} color={colors.blue} />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'flex-start', flex: 1, paddingHorizontal: 10 }}>
                        <TextInput
                            style={styles.textBoxStyling}
                            placeholder='Type A Message'
                        />
                    </View>
                    <TouchableOpacity onPress={() => console.log("Camera")}>
                        <FontAwesome name="camera" size={24} color={colors.blue} />
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
    },
    textBoxStyling: {

    }
})
