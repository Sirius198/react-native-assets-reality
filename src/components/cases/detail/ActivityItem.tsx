import { View, Text } from "react-native";
import styled from "styled-components/native";
import Typography from "../../common/typography/Typography";
import IconBox from "../../common/svg/IconBox";
import Divider from "../../common/divider";
import { useTheme } from "@react-navigation/native";
import IconWrapper from "../../common/base/IconWrapper";
import MySVG from "../../common/svg";

const ActivityItem = () => {

    const { colors } = useTheme();

    return (
        <Wrapper style={{ backgroundColor: colors.card }}>
            <Row>
                <Row style={{ flexGrow: 1 }}>
                    <IconWrapper style={{ backgroundColor: 'rgba(62, 126, 255, 0.1)' }}>
                        <MySVG.Withdrawal style={{ color: '#3E7EFF' }} />
                    </IconWrapper>
                    {/* <IconBox name="withdrawal" color="blue" /> */}
                    <TextGroup>
                        <Typography weight="SemiBold">Withdrawal</Typography>
                        <Typography variant="secondary" size={12}>9:40 AM</Typography>
                    </TextGroup>
                </Row>
                <Row style={{ flexGrow: 1 }}>
                    <IconWrapper style={{ backgroundColor: 'rgba(138, 62, 255, 0.06)' }}>
                        <MySVG.From style={{ color: '#8A3EFF' }} />
                    </IconWrapper>
                    <TextGroup>
                        <Typography weight="SemiBold">From</Typography>
                        <Typography variant="secondary" size={12}>0xd123...229</Typography>
                    </TextGroup>
                </Row>
            </Row>

            <Divider />

            <Row>
                <Row style={{ flexGrow: 1 }}>
                    <IconWrapper style={{ backgroundColor: 'rgba(242, 147, 57, 0.1)' }}>
                        <MySVG.DollarCircle style={{ color: '#F29339' }} />
                    </IconWrapper>
                    <TextGroup>
                        <Typography weight="SemiBold">Amount</Typography>
                        <Typography variant="secondary" size={12}>+22.54BTC</Typography>
                    </TextGroup>
                </Row>
                <Row style={{ flexGrow: 1 }}>
                    <IconWrapper style={{ backgroundColor: 'rgba(95, 220, 179, 0.13)' }}>
                        <MySVG.Gas style={{ color: '#1BE3A2' }} />
                    </IconWrapper>
                    <TextGroup>
                        <Typography weight="SemiBold">Gas Fee</Typography>
                        <Typography variant="secondary" size={12}>0.0523 BNB</Typography>
                    </TextGroup>
                </Row>
            </Row>

            <Divider />

            <Row style={{ justifyContent: 'space-between' }}>
                <Row>
                    <IconWrapper style={{ backgroundColor: 'rgba(240, 185, 11, 0.1)' }}>
                        <MySVG.Binance style={{ color: '#F0B90B' }} />
                    </IconWrapper>
                    <TextGroup>
                        <Typography weight="SemiBold">Binance Smart Chain</Typography>
                        <Typography variant="secondary" size={12}>0.0523 BNB</Typography>
                    </TextGroup>
                </Row>
            </Row>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

const TextGroup = styled.View`
    margin-left: 10px;
`;

export default ActivityItem;