import { useLayoutEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Typography from "../../../components/common/typography/Typography";
import styled from 'styled-components/native'
import GroupItem from "../../../components/settings/group/GroupItem";
import { useTheme } from "@react-navigation/native";
import SearchBox from "../../../components/common/input/SearchBox";
import MenuPlusButton from "../../../components/common/buttons/MenuPlusButton";
import CreateGroupModal from "../../../components/settings/group/modal/CreateGroupModal";
import FormInput from "../../../components/common/form/FormInput";
import MainContentWrapper from "../../../components/common/base/MainContentWrapper";

const SettingsGroup = ({ navigation }) => {

    const [createModalShow, setCreateModalShow] = useState(false)
    const { colors } = useTheme();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography>Manage group</Typography>
                    <Typography weight="Bold" size={18}>Group Management</Typography>
                </View>
            ),
            headerRight: () => (
                <MenuPlusButton
                    onPress={() => setCreateModalShow(true)}
                />
            )
        })
    }, []);

    const gotoDetails = () => {
        navigation.navigate("GroupDetail")
    };

    return (
        <MainContentWrapper style={{ backgroundColor: colors.background }}>

            <SearchBox />

            <Typography
                weight="SemiBold"
                size={14}
                style={{ marginBottom: 14, marginTop: 24 }}
            >
                Group List
            </Typography>

            <GroupItem name="Design" memberCount={5} onPress={() => gotoDetails()}></GroupItem>
            <GroupItem name="Development" memberCount={10}></GroupItem>

            <CreateGroupModal
                show={createModalShow}
                onClose={() => setCreateModalShow(false)}
            />
        </MainContentWrapper>
    )
};

export default SettingsGroup