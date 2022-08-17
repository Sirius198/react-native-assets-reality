import { useTheme } from "@react-navigation/native";
import { View } from "react-native";
import styled from 'styled-components/native'
import Label from "../../common/base/Label";
import Divider from "../../common/divider";
import Typography from "../../common/typography/Typography";

const GroupMemberItem = () => {
    const { colors } = useTheme();

    return (
        <Wrapper style={{ backgroundColor: colors.card }}>
            <Row>
                <View>
                    <Typography size={14} weight="SemiBold">John Doe</Typography>
                    <Typography size={12} variant="secondary">hugo@assetreality.io</Typography>
                </View>
            </Row>

            <Divider />

            <Row>
                <Label>Admin</Label>
                <View>
                    <Typography size={14} variant="secondary">Nov 12 2022</Typography>
                </View>
            </Row>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 12px;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default GroupMemberItem