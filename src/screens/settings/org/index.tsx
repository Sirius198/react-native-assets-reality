import { useTheme } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";
import MenuIconWrapper from "../../../components/common/base/MenuIconWrapper";
import MenuPlusButton from "../../../components/common/buttons/MenuPlusButton";
import MySVG from "../../../components/common/svg";
import IconBox from "../../../components/common/svg/IconBox";
import Typography from "../../../components/common/typography/Typography";
import OrganisationEditModal from "../../../components/settings/org/modal/OrganisationEditModal";
import { Item, TextWrapper, Wrapper } from "./styles";

const SettingsOrganization = ({ navigation }) => {

    const { dark, colors } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography weight="Bold" size={16}>Organisation</Typography>
                    <Typography>Last Update: 20 Dec 2022</Typography>
                </View>
            ),
            headerRight: () => (
                <MenuPlusButton name="pen" onPress={() => setModalVisible(true)} />
            ),
            headerStyle: {
                backgroundColor: colors.card
            }
        })
    }, [dark]);

    return (
        <>
            <Wrapper style={{ backgroundColor: colors.card }}>
                <Item>
                    <MenuIconWrapper>
                        <MySVG.OrganisationName width={22.5} height={22.5} style={{ color: dark ? '#fff' : '#23262F' }} />
                    </MenuIconWrapper>
                    <TextWrapper>
                        <Typography variant="secondary" size={12}>Organisation Name</Typography>
                        <Typography weight="SemiBold">Asset Reality</Typography>
                    </TextWrapper>
                </Item>

                <Item>
                    <MenuIconWrapper>
                        <MySVG.Phone width={22.5} height={22.5} style={{ color: dark ? '#fff' : '#23262F' }} />
                    </MenuIconWrapper>
                    <TextWrapper>
                        <Typography variant="secondary" size={12}>Phone Number</Typography>
                        <Typography weight="SemiBold">+44 573635623</Typography>
                    </TextWrapper>
                </Item>

                <Item>
                    <MenuIconWrapper>
                        <MySVG.Flag width={22.5} height={22.5} style={{ color: dark ? '#fff' : '#23262F' }} />
                    </MenuIconWrapper>
                    <TextWrapper>
                        <Typography variant="secondary" size={12}>Country</Typography>
                        <Typography weight="SemiBold">United Kingdom</Typography>
                    </TextWrapper>
                </Item>

                <Item>
                    <MenuIconWrapper>
                        <MySVG.Location width={22.5} height={22.5} style={{ color: dark ? '#fff' : '#23262F' }} />
                    </MenuIconWrapper>
                    <TextWrapper>
                        <Typography variant="secondary" size={12}>Address</Typography>
                        <Typography weight="SemiBold">Kemp House, 152-160 City Road, London, United Kingdom, EC1V 2NX</Typography>
                    </TextWrapper>
                </Item>

                <Item>
                    <MenuIconWrapper>
                        <MySVG.Email width={22.5} height={22.5} style={{ color: dark ? '#fff' : '#23262F' }} />
                    </MenuIconWrapper>
                    <TextWrapper>
                        <Typography variant="secondary" size={12}>Email Address</Typography>
                        <Typography weight="SemiBold">yoko.io</Typography>
                    </TextWrapper>
                </Item>
            </Wrapper>

            <OrganisationEditModal show={modalVisible} onClose={() => setModalVisible(false)} />
        </>
    )
}

export default SettingsOrganization;