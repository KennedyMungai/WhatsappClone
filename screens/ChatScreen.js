import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ImageBackground, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import { useState } from 'react';

const ChatScreen = ({ navigation }) => {
    const [chatText, setChatText] = useState('')

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
                    <View
                        style={
                            {
                                justifyContent: 'flex-start',
                                flex: 1,
                                paddingHorizontal: 5,
                                borderWidth: 1,
                                borderColor: colors.lightGray,
                                borderRadius: 5,
                                marginHorizontal: 10
                            }
                        }
                    >
                        <TextInput
                            style={styles.textBoxStyling}
                            placeholder='Type A Message'
                            autoCorrect
                            maxLength={38}
                            scrollEnabled
                            value={chatText}
                            onChangeText={(text) => setChatText(text)}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={
                            () => console.log("Camera")
                        }
                    >
                        <FontAwesome name={`${chatText.length !== 0 ? "send" : "camera"}`} size={24} color={colors.blue} />
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
        alignItems: 'center',
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
        padding: 5,
        borderColor: colors.blue
    }
})
