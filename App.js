import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
	return (
		<SafeAreaProvider style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style='auto' />

			<Button
				title='Click Me'
				onPress={() => console.log('Button Clicked')}
			/>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
