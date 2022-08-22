import { useLayoutEffect } from "react";
import { View, TouchableOpacity, Switch } from "react-native";
import Typography from "../../../components/common/typography/Typography";
import styled from 'styled-components/native'
import FormLabel from "../../../components/common/form/FormLabel";
import FormInput from "../../../components/common/form/FormInput";
import { NotificationSettingsData } from "./constant";
import { useTheme } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/FontAwesome5';
import MainContentWrapper from "../../../components/common/base/MainContentWrapper";

const SettingsEmail = ({ navigation }) => {

    const { dark } = useTheme();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography>Manage your email settings</Typography>
                    <Typography weight="Bold" size={16}>Email Settings</Typography>
                </View>
            ),
        })
    }, []);

    return (
        <MainContentWrapper>

            <Typography
                size={20}
                weight="SemiBold"
                style={{ marginBottom: 16 }}
            >
                Personal Settings
            </Typography>

            <FormLabel>Name</FormLabel>
            <FormInput variant="secondary" placeholder="Hugo Eliot" />

            <FormLabel>Email</FormLabel>
            <FormInput variant="secondary" placeholder="Eliot@assetreality.io" />

            <FormLabel>Password</FormLabel>
            <FormInput variant="secondary" />

            <Typography
                size={20}
                weight="SemiBold"
                style={{ marginBottom: 16 }}
            >
                Email notification settings
            </Typography>

            {NotificationSettingsData.map((s, index) => (

                <NotfSettingWrapper key={index} dark={dark}>
                    <Icon name="bell" color="#8A8B9D" size={15} />
                    <Typography
                        style={{ flex: 1, marginLeft: 10 }}
                        size={14}
                        weight="Medium"
                    >
                        {s.text}
                    </Typography>
                    <Switch style={{ width: 10, height: 20 }} />
                </NotfSettingWrapper>
            ))}

        </MainContentWrapper>
    )
}

const NotfSettingWrapper = styled.View`
    padding: 15px 12px;
    flex-direction: row;
    background-color: ${({ dark }) => dark ? '#242731' : '#fff'};
    align-items: center;
    margin-bottom: 8px;
    border-radius: 10px;
`;

export default SettingsEmail;