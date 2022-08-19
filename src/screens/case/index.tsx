import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivityPage from './activities';
import TotalAssetsPage from './assets';
import CaseHome from './home';
import CaseInspectPage from './inspect';

const Stack = createNativeStackNavigator();

export default function CaseScreen() {

    const theme = useTheme();

    return (
        <NavigationContainer independent={true} theme={theme}>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.background,
                },
                headerShadowVisible: false
            }}>
                <Stack.Screen name="Home" component={CaseHome} />
                <Stack.Screen name="Inspect" component={CaseInspectPage} />
                <Stack.Screen name="Assets" component={TotalAssetsPage} />
                <Stack.Screen name="Activity" component={ActivityPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}