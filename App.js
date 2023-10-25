import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigator from './navigation/AppNavigator'
import AuthScreen from './screens/AuthScreen'

SplashScreen.preventAutoHideAsync()

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

	const isAuth = false

	return (
		<SafeAreaProvider style={styles.container} onLayout={onLayout}>
			{isAuth ? <AppNavigator /> : <AuthScreen />}
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
