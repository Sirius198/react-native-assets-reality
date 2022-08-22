import { useLayoutEffect } from "react";
import { View } from "react-native";
import Typography from "../../../components/common/typography/Typography";
import styled from 'styled-components/native'
import FormInput from "../../../components/common/form/FormInput";
import OutlineButton from "../../../components/common/buttons/OutlineButton";
import { useTheme } from "@react-navigation/native";
import GroupMemberItem from "../../../components/settings/group/GroupMemberItem";
import SearchBox from "../../../components/common/input/SearchBox";
import MainContentWrapper from "../../../components/common/base/MainContentWrapper";

const SettingsGroupDetail = ({ navigation, route }) => {

    // const { v } = route.params;
    const { colors } = useTheme();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography weight="Bold" size={16}>5 Members in Design</Typography>
                    <Typography>Group Management</Typography>
                </View>
            ),
        })
    }, []);

    return (
        <MainContentWrapper>
            <SearchBox />

            <View style={{ flexDirection: 'row', marginBottom: 24, marginTop: 16 }}>
                <OutlineButton text="Delete Group" variant="danger" style={{ marginRight: 6, flex: 1 }} />
                <OutlineButton text="Add Member" icon="plus" style={{ marginLeft: 6, flex: 1 }} />
            </View>

            {[1, 2, 3, 4, 1].map((_, index) => (
                <GroupMemberItem key={index} />
            ))}
        </MainContentWrapper>
    )
};

export default SettingsGroupDetail