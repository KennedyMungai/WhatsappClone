import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [appIsLoaded, setAppIsLoaded] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setAppIsLoaded(true)
		}, 2000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<SafeAreaProvider style={styles.container}>
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
