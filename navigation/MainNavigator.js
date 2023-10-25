import { createStackNavigator } from '@react-navigation/stack'
import ChatSettingsScreen from '../screens/ChatSettingsScreen'
import TabNavigator from './TabNavigator'
import ChatScreen from '../screens/ChatScreen'

const Stack = createStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChatSettings"
                component={ChatSettingsScreen}
                options={
                    {
                        headerShown: false,
                        headerTitle: 'Settings'
                    }
                }
            />
            <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={
                    {
                        headerShown: false,
                        headerTitle: 'Chat'
                    }
                }
            />
        </Stack.Navigator>
    )
}

export default MainNavigator
