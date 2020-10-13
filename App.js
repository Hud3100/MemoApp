import React from 'react';
import { StyleSheet, View } from 'react-native';

import SignUpScreen from './src/screens/SignUpScreen';
import Appbar from './src/components/Appbar';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Appbar />
				<SignUpScreen />
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
