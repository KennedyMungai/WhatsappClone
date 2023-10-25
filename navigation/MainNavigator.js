import ChatSettingsScreen from '../screens/ChatSettingsScreen'
import TabNavigator from './TabNavigator'
import { createStackNavigator } from '@react-navigation/stack'

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
        </Stack.Navigator>
    )
}

export default MainNavigator
