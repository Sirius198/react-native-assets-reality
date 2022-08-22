import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import HeaderButton from '../../components/common/buttons/HeaderButton';
import MyNavHeader from '../../components/common/navheader';
import Typography from '../../components/common/typography/Typography';
import ActivityPage from './activities';
import TotalAssetsPage from './assets';
import CaseHome from './home';
import CaseInspectPage from './inspect';

const Stack = createNativeStackNavigator();

const MyHeader = props => {
    return (
        <View
            {...props}
            style={{ paddingTop: 90, flexDirection: 'row', justifyContent: 'space-between' }}
        >
            {props.options.headerTitle()}
            {props.options.headerRight()}
        </View>
    )
}

export default function CaseScreen() {

    const theme = useTheme();

    return (
        <NavigationContainer independent={true} theme={theme}>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: theme.colors.background,
                    },
                    header: props => <MyNavHeader {...props} />,
                    // headerShadowVisible: false,
                    // headerBackVisible: true,
                    headerLeft: props => <HeaderButton onPress={() => navigation.goBack()} style={{ marginRight: 10 }} />
                })}>
                <Stack.Screen name="Home" component={CaseHome} />
                <Stack.Screen name="Inspect" component={CaseInspectPage} />
                <Stack.Screen name="Assets" component={TotalAssetsPage} />
                <Stack.Screen name="Activity" component={ActivityPage} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}