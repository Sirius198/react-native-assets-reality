import Typography from "../../components/common/typography/Typography";
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Signin from "./signin";
import TwoFactorPage from "./twofactor";

const Stack = createNativeStackNavigator();

export default function AuthMain() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    headerShown: false
                })}>
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="TwoFactor" component={TwoFactorPage} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}