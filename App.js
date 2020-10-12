import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoDetailScreen from './src/screens/MemoDetailScreen';
import Appbar from './src/components/Appbar';
import CircleButton from './src/elements/CircleButton';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Appbar />
				<MemoDetailScreen />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFDF6',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 78,
	},
});
