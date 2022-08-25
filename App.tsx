import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import AppContainer from './src';

export default function App() {

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
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppContainer />
			</PersistGate>
		</Provider>
	)
}