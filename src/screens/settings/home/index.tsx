import { useTheme } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text } from "react-native"
import IconBox from "../../../components/common/svg/IconBox";
import Typography from "../../../components/common/typography/Typography";
import { SettingsHomeData } from "./homeData";
import { ButtonContent, SettingCategoryButtonWrapper, Wrapper } from "./styles";
import ProfileTermsOfUseSvg from "../../../assets/icons/profile/test.svg";
import MenuIcon from "../../../components/common/base/MenuIconWrapper";
import MySVG from "../../../components/common/svg";
import MenuIconWrapper from "../../../components/common/base/MenuIconWrapper";

const SettingsHome = ({ navigation }) => {
    const { dark, colors } = useTheme();
    const { menuData } = SettingsHomeData;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => <View><Typography weight="Bold" size={18}>Settings</Typography></View>,
            headerStyle: {
                backgroundColor: dark ? '#1F2128' : '#FFF',
            }
        });
    }, [dark]);

    return (
        <Wrapper style={{ backgroundColor: dark ? '#1F2128' : colors.card }}>

            {menuData.map((m, index) => (
                <SettingCategoryButtonWrapper
                    key={index}
                    dark={dark}
                    onPress={() => navigation.navigate(m.target)}
                >
                    <MenuIconWrapper>
                        {index === 0 && <MySVG.User width={22.5} height={22.5} style={{ color: dark ? '#fff' : '#23262F' }} />}
                        {index === 1 && <MySVG.EmailSettings width={22.5} height={22.5} style={{ color: dark ? '#fff' : '#23262F' }} />}
                        {index === 2 && <MySVG.Invoice width={22.5} height={22.5} style={{ color: dark ? '#fff' : '#23262F' }} />}
                        {index === 3 && <MySVG.Group width={22.5} height={22.5} style={{ color: dark ? '#fff' : '#23262F' }} />}
                        {index === 4 && <MySVG.UserPlus width={22.5} height={22.5} style={{ color: dark ? '#fff' : '#23262F' }} />}
                        {index === 5 && <MySVG.Organisation width={22.5} height={22.5} style={{ color: dark ? '#fff' : '#23262F' }} />}
                    </MenuIconWrapper>
                    <ButtonContent>
                        <Typography weight="Medium" size={14}>{m.title}</Typography>
                        <Typography variant="secondary" size={12}>{m.subtitle}</Typography>
                    </ButtonContent>
                </SettingCategoryButtonWrapper>
            ))}

        </Wrapper>
    )
}

export default SettingsHome;