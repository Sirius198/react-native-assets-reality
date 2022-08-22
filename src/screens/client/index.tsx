import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButton from '../../components/common/buttons/HeaderButton';
import ClientDetailPage from './detail';
import ClientHome from './home';

const Stack = createNativeStackNavigator();

export default function ClientScreen() {
    const theme = useTheme();

    return (
        <NavigationContainer independent={true} theme={theme}>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: theme.colors.background,
                    },
                    headerShadowVisible: false,
                    headerLeft: props => (props.canGoBack ? <HeaderButton onPress={() => navigation.goBack()} style={{ marginLeft: 24 }} /> : '')
                })}>
                <Stack.Screen name="Home" component={ClientHome} />
                <Stack.Screen name="Detail" component={ClientDetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}