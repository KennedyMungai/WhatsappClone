import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ChatListScreen from "../screens/ChatListScreen"
import ChatSettingsScreen from "../screens/ChatSettingsScreen"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }
        }>
            <Tab.Screen name="Chat" component={ChatListScreen} options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({ color, size }) => <Ionicons name="chatbox" size={size} color={color} />
            }
            }
            />
            < Tab.Screen
                name="Settings"
                component={ChatSettingsScreen}
                options={
                    {
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />
                    }
                }
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
