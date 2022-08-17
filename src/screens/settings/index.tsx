import { View, Button, Text } from "react-native";
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsHome from "./home";
import SettingsOrganization from "./org";
import SettingsUser from "./user";
import SettingsEmail from "./email";
import SettingsGroup from "./group";
import SettingsGroupDetail from "./group/detail";
import SettingsInvoice from "./invoice";
import SettingsCustodian from "./custodian";

const Stack = createNativeStackNavigator();

const SettingsScreen = () => {
    const theme = useTheme();

    return (
        <NavigationContainer independent={true} theme={theme}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={SettingsHome} />
                <Stack.Screen name="Org" component={SettingsOrganization} />
                <Stack.Screen name="User" component={SettingsUser} />
                <Stack.Screen name="Email" component={SettingsEmail} />
                <Stack.Screen name="Group" component={SettingsGroup} />
                <Stack.Screen name="GroupDetail" component={SettingsGroupDetail} />
                <Stack.Screen name="Custodian" component={SettingsCustodian} />
                <Stack.Screen name="Invoice" component={SettingsInvoice} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default SettingsScreen;