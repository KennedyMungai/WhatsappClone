import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import * as Font from 'expo-font'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [appIsLoaded, setAppIsLoaded] = useState(false)

	useEffect(() => {
		const loadFonts = async () => {
			try {
				await Font.loadAsync({
					"black": require('./assets/fonts/Roboto-Black.ttf')
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
			<SafeAreaView>
				<Text>Something in the way</Text>
				<StatusBar style='auto' />
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	counterButtonsView: {
		flexDirection: 'row',
		gap: 10
	}
})
