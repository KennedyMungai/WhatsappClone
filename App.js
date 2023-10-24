import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, View, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

export default function App() {
	const [counter, setCounter] = useState(0)

	const addCounter = () => {
		setCounter(counter + 1)
	}

	const removeCounter = () => {
		setCounter(counter - 1)
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
