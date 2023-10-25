import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ChatSettingsScreen from '../screens/ChatSettingsScreen'
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (<NavigationContainer>
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
    </NavigationContainer>)
}

export default AppNavigator
