import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import HeaderButton from '../../components/common/buttons/HeaderButton';
import Typography from '../../components/common/typography/Typography';
import ActivityPage from './activities';
import TotalAssetsPage from './assets';
import CaseHome from './home';
import CaseInspectPage from './inspect';

const Stack = createNativeStackNavigator();

export default function CaseScreen() {

    const theme = useTheme();

    return (
        <NavigationContainer independent={true} theme={theme}>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: theme.colors.background,
                        marginTop: 100
                    },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: props => (props.canGoBack ? <HeaderButton onPress={() => navigation.goBack()} style={{ marginLeft: 20 }} /> : <></>)
                })}>
                <Stack.Screen name="Home" component={CaseHome} />
                <Stack.Screen name="Inspect" component={CaseInspectPage} />
                <Stack.Screen name="Assets" component={TotalAssetsPage} />
                <Stack.Screen name="Activity" component={ActivityPage} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}