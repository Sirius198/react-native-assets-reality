import { useTheme } from "@react-navigation/native";
import { useContext, useMemo } from "react";
import { Text, View, ScrollView, TouchableOpacity, Switch } from "react-native";
import { useSelector } from "react-redux";
import styled from 'styled-components/native'
import IconWrapper from "../../components/common/base/IconWrapper";
import Divider from "../../components/common/divider";
import MySVG from "../../components/common/svg";
import IconBox from "../../components/common/svg/IconBox";
import Typography from "../../components/common/typography/Typography";
import UserAvatar from "../../components/profile/Avatar";
import { ThemeContext } from "../../context-store/context";

const ProifileScreen = () => {

    const { dark, colors } = useTheme();
    const { theme, setTheme } = useContext(ThemeContext);
    const iconColor = useMemo(() => dark ? '#FAFAFF' : '#23262F', [dark]);
    const auth = useSelector((state: any) => state.auth);

    return (
        <ScrollViewWrapper style={{ backgroundColor: colors.card }}>

            <AvatarWrapper>
                <UserAvatar alt="JD" />

                <Typography size={24} style={{ marginTop: 10 }}>{auth.name}</Typography>
                <Typography size={16} variant="secondary">hugo@assetreality.io</Typography>
            </AvatarWrapper>

            <Div2 style={{ marginTop: 30 }}>
                <Div>
                    <IconWrapper radius={100} size={42}>
                        {dark ? <MySVG.ThemeDark style={{ color: iconColor }} /> : <MySVG.ThemeLight style={{ color: iconColor }} />}
                    </IconWrapper>
                    <Typography size={16} style={{ marginLeft: 10 }}>Dark Mode</Typography>
                </Div>
                <Switch
                    value={theme == 'dark'}
                    onValueChange={value => setTheme(value ? 'dark' : 'light')}
                />
            </Div2>
            <Divider />

            <Button>
                <IconWrapper radius={100} size={42}>
                    <MySVG.Privacy style={{ color: iconColor }} />
                </IconWrapper>
                <Typography size={16} style={{ marginLeft: 10 }}>Privacy Policy</Typography>
            </Button>
            <Divider />

            <Button>
                <IconWrapper radius={100} size={42}>
                    <MySVG.Invoice style={{ color: iconColor }} width={20} height={20} />
                </IconWrapper>
                <Typography size={16} style={{ marginLeft: 10 }}>Terms of Use</Typography>
            </Button>
            <Divider />

            <Button>
                <IconWrapper radius={100} size={42}>
                    <MySVG.License style={{ color: iconColor }} />
                </IconWrapper>
                <Typography size={16} style={{ marginLeft: 10 }}>License</Typography>
            </Button>
            <Divider />

            <Button>
                <IconWrapper radius={100} size={42}>
                    <MySVG.Logout style={{ color: '#3E7EFF' }} />
                </IconWrapper>
                <Typography size={16} style={{ marginLeft: 10, color: '#3e7eff' }}>Log Out</Typography>
            </Button>

        </ScrollViewWrapper>
    )
};

const ScrollViewWrapper = styled.ScrollView`
    padding: 20px;
    background-color: #fff;
`;

const AvatarWrapper = styled.View`
    align-items: center;
`;

const Div = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Div2 = styled(Div)`
    justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`

export default ProifileScreen;