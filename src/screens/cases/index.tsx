import { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import CaseMain from './CaseMain';
import DetailPage from './DetailPage';

export default function CaseScreen({ navigation }) {
    const [caseId, setCaseId] = useState(-1);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return null
                return <Text>It's left1</Text>
            }, 
            headerRight: () => {
                if (caseId === -1)
                    return <Button onPress={() => {}} title="Update count" />;
                return <Button onPress={() => {}} title="Update inner" />;
            },
        });
    }, [navigation, caseId]);

    const inspectCase = (cid) => {
        setCaseId(cid);
    };

    return (
        <ScrollView>
            {caseId === -1 ?
                <CaseMain onInspect={inspectCase} /> :
                <DetailPage onBack={() => setCaseId(-1)} />
            }
        </ScrollView>
    )
}

const CustomHeader = ({ title, subtitle }) => (
    <View>
        <Text style={{ color: 'red'}}>{title}</Text>
        <Text>{subtitle}</Text>
    </View>
);

CaseScreen.navigationOptions = ({ title = 'Hello', subtitle = 'World' }) => {
    return {
        headerTitle: <CustomHeader title={title} subtitle={subtitle} />,
    };
};