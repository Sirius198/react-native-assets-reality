import { NavigationContainer, DefaultTheme, useTheme, DarkTheme } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContext } from '../context-store/context';
import MainNavigation from '../navigator';

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

export default function MainScreen() {

    const [theme, setTheme] = useState('light');

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