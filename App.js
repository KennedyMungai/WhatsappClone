import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function App() {
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
