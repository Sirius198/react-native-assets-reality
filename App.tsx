import { StyleSheet, Text, View, TouchableOpacity, FlexAlignType, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, useTheme, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/navigator';
import { useFonts } from 'expo-font';
import { ThemeContext } from './src/context-store/context';
import { useState } from 'react';

const MyDarkTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		primary: 'white',
		card: '#242731',
		border: 'rgb(45, 48, 60)',
		background: 'rgb(31, 33, 40)',
	},
};

const MyLightTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'rgb(248, 248, 248)',
	}
};

export default function App() {
	// const darkMode = true;
	const [theme, setTheme] = useState('light');

	// Load PublicSans Font Family
	const [loaded] = useFonts({
		FF_Light: require('./src/assets/fonts/PublicSans-Light.ttf'),
		FF_Regular: require('./src/assets/fonts/PublicSans-Regular.ttf'),
		FF_SemiBold: require('./src/assets/fonts/PublicSans-SemiBold.ttf'),
		FF_Medium: require('./src/assets/fonts/PublicSans-Medium.ttf'),
		FF_Bold: require('./src/assets/fonts/PublicSans-Bold.ttf'),
	});

	if (!loaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<NavigationContainer theme={theme == 'dark' ? MyDarkTheme : MyLightTheme}>
					<MainNavigation />
				</NavigationContainer>
			</ThemeContext.Provider>
		</SafeAreaProvider>
	)
}
