import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ChatListScreen from './screens/ChatListScreen'
import ChatSettingsScreen from './screens/ChatSettingsScreen'
import { Ionicons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync()

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Chat"
				component={ChatListScreen}
				options={
					{
						headerShown: false,
						tabBarLabel: 'Chat',
						tabBarIcon: () => <Ionicons name="chatbox" size={24} color="black" />
					}
				}
			/>
			<Tab.Screen
				name="Settings"
				component={ChatSettingsScreen}
				options={
					{
						headerShown: false,
						tabBarLabel: 'Settings',
						tabBarIcon: () => <Ionicons name="settings" size={24} color="black" />
					}
				}
			/>
		</Tab.Navigator>
	)
}

export default function App() {
	const [appIsLoaded, setAppIsLoaded] = useState(false)

	useEffect(() => {
		const loadFonts = async () => {
			try {
				await Font.loadAsync({
					"black": require('./assets/fonts/Roboto-Black.ttf'),
					"black-italic": require('./assets/fonts/Roboto-BlackItalic.ttf'),
					"bold": require('./assets/fonts/Roboto-Bold.ttf'),
					"bold-italic": require('./assets/fonts/Roboto-BoldItalic.ttf'),
					"italic": require('./assets/fonts/Roboto-Italic.ttf'),
					"light": require('./assets/fonts/Roboto-Light.ttf'),
					"light-italic": require('./assets/fonts/Roboto-LightItalic.ttf'),
					"medium": require('./assets/fonts/Roboto-Medium.ttf'),
					"medium-italic": require('./assets/fonts/Roboto-MediumItalic.ttf'),
					"regular": require('./assets/fonts/Roboto-Regular.ttf'),
					"thin": require('./assets/fonts/Roboto-Thin.ttf'),
					"thin-italic": require('./assets/fonts/Roboto-ThinItalic.ttf')
				})
			} catch (error) {
				console.error(error.message)
			} finally {
				setAppIsLoaded(true)
			}
		}

		loadFonts()
	}, [])

	const onLayout = useCallback(async () => {
		await SplashScreen.hideAsync()
	}, [appIsLoaded])

	if (!appIsLoaded) return null

	return (
		<SafeAreaProvider style={styles.container} onLayout={onLayout}>
			{/* <SafeAreaView> */}
			<NavigationContainer>
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
			</NavigationContainer>
			{/* </SafeAreaView> */}
			<StatusBar style='auto' />
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	counterButtonsView: {
		flexDirection: 'row',
		gap: 10
	},
	mainPageTestText: {
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'regular'
	}
})
