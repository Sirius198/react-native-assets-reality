import { useTheme } from "@react-navigation/native";
import { useContext } from "react";
import { Text, View, ScrollView, TouchableOpacity, Switch } from "react-native";
import styled from 'styled-components/native'
import Divider from "../../components/common/divider";
import IconBox from "../../components/common/svg/IconBox";
import Typography from "../../components/common/typography/Typography";
import UserAvatar from "../../components/profile/Avatar";
import { ThemeContext } from "../../context-store/context";

const ProifileScreen = () => {

    const { colors } = useTheme();
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <ScrollViewWrapper style={{ backgroundColor: colors.card }}>

            <AvatarWrapper>
                <UserAvatar alt="JD" />

                <Typography size={24} style={{ marginTop: 10 }}>John Doe</Typography>
                <Typography size={16} variant="secondary">hugo@assetreality.io</Typography>
            </AvatarWrapper>

            <Div2 style={{ marginTop: 30 }}>
                <Div>
                    <IconBox name="light" color="#F7F7FE" radius={100} />
                    <Typography size={16} style={{ marginLeft: 10 }}>Dark Mode</Typography>
                </Div>
                <Switch
                    value={theme == 'dark'}
                    onValueChange = {value => setTheme(value ? 'dark' : 'light')}
                />
            </Div2>
            <Divider />

            <Button>
                <IconBox name="privacy-policy" color="#F7F7FE" radius={100} />
                <Typography size={16} style={{ marginLeft: 10 }}>Privacy Policy</Typography>
            </Button>
            <Divider />

            <Button>
                <IconBox name="terms-of-use" color="#F7F7FE" radius={100} />
                <Typography size={16} style={{ marginLeft: 10 }}>Terms of Use</Typography>
            </Button>
            <Divider />

            <Button>
                <IconBox name="license" color="#F7F7FE" radius={100} />
                <Typography size={16} style={{ marginLeft: 10 }}>License</Typography>
            </Button>
            <Divider />

            <Button>
                <IconBox name="logout" color="#F7F7FE" radius={100} />
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
    flex: 1;
    flex-direction: row;
    align-items: center;
`

export default ProifileScreen;