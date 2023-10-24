import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	return (
		<SafeAreaProvider style={styles.container}>
			<SafeAreaView>
				<Button
					title='Click Me'
					onPress={() => console.log('Button Clicked')}
				/>

				<Button
					title='Click Me'
					onPress={() => console.log('Button Clicked')}
				/>

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
	}
})
