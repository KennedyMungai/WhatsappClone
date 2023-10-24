import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	const [counter, setCounter] = useState(0)

	const addCounter = () => {
		setCounter((number) => {
			return number + 1
		})
	}

	const removeCounter = () => {
		setCounter((number) => {
			return number - 1
		})
	}

	return (
		<SafeAreaProvider style={styles.container}>
			<SafeAreaView>
				<View style={styles.counterButtonsView}>
					<Button title='Add' onPress={addCounter} />
					<Text>{counter}</Text>
					<Button title='Subtract' onPress={removeCounter} />
				</View>
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
