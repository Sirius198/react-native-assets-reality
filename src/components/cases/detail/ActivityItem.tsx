import { View, Text } from "react-native";
import styled from "styled-components/native";
import Typography from "../../common/typography/Typography";
import IconBox from "../../common/svg/IconBox";
import Divider from "../../common/divider";
import { useTheme } from "@react-navigation/native";

const ActivityItem = () => {

    const { colors } = useTheme();

    return (
        <Wrapper style={{ backgroundColor: colors.card }}>
            <Row>
                <Row>
                    <IconBox name="withdrawal" color="blue" />
                    <TextGroup>
                        <Typography weight="SemiBold">Withdrawal</Typography>
                        <Typography variant="secondary" size={12}>9:40 AM</Typography>
                    </TextGroup>
                </Row>
                <Row>
                    <IconBox name="from" color="pink" />
                    <TextGroup>
                        <Typography weight="SemiBold">From</Typography>
                        <Typography variant="secondary" size={12}>0xd123...229</Typography>
                    </TextGroup>
                </Row>
            </Row>

            <Divider />

            <Row>
                <Row>
                    <IconBox name="amount" color="red" />
                    <TextGroup>
                        <Typography weight="SemiBold">Amount</Typography>
                        <Typography variant="secondary" size={12}>+22.54BTC</Typography>
                    </TextGroup>
                </Row>
                <Row>
                    <IconBox name="gasfee" color="green" />
                    <TextGroup>
                        <Typography weight="SemiBold">Gas Fee</Typography>
                        <Typography variant="secondary" size={12}>0.0523 BNB</Typography>
                    </TextGroup>
                </Row>
            </Row>

            <Divider />

            <Row style={{ justifyContent: 'space-between' }}>
                <Row>
                    <IconBox name="binance" color="yellow" />
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
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

const TextGroup = styled.View`
    margin-left: 10px;
`;

export default ActivityItem;