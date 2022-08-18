import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientDetailPage from './detail';
import ClientHome from './home';

const Stack = createNativeStackNavigator();

export default function ClientScreen() {
    const theme = useTheme();

    return (
        <NavigationContainer independent={true} theme={theme}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ClientHome} options={{
                    headerStyle: {
                        backgroundColor: theme.colors.background,
                    },
                    headerShadowVisible: false
                }}/>
                <Stack.Screen name="Detail" component={ClientDetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}