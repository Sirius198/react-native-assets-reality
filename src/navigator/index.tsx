
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SvgUri from 'react-native-svg-uri';
import MainTabBar from './MainTabBar';

import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, } from "react-native";
import ActivityScreen from '../screens/activity';
import ProifileScreen from '../screens/profile';
import SettingsScreen from '../screens/settings';
import CaseScreen from '../screens/case';
// import CaseScreen2 from '../screens/case';
// import MainHeader from './MainHeader';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}
function ClientScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Client Screen</Text>
        </View>
    );
}

const TouchableWithoutFeedbackExample = () => {
    const [count, setCount] = useState(0);

    const onPress = () => {
        setCount(count + 1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text style={styles.countText}>Count: {count}</Text>
            </View>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.button}>
                    <Text>Touch Here</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    countText: {
        color: "#FF00FF"
    }
});

const Tab = createBottomTabNavigator();

function MainNavigation() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // tabBarInactiveTintColor: 'tomato',
                tabBarShowLabel: false,
                headerShown: false,
                // tabBarIcon: ({ color }) => getTabbarIcon(route, color),
                // tabBarBackgroundColor: 'red'
                // header: (props) => <MainHeader headerProps={props} />
            })}
            tabBar={(props) => {
                return <MainTabBar navInfo={props} />
            }}
        >
            <Tab.Screen name="Case" component={CaseScreen} />
            <Tab.Screen name="Client" component={ClientScreen} />
            <Tab.Screen name="Activity" component={ActivityScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Profile" component={ProifileScreen} />
        </Tab.Navigator >
    );
}

export default MainNavigation;