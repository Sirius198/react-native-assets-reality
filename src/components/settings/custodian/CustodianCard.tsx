import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import styled from 'styled-components/native'
import Label from '../../common/base/Label';
import PrimaryButton from '../../common/buttons/PrimaryButton';
import Divider from '../../common/divider';
import MySVG from '../../common/svg';
import Typography from '../../common/typography/Typography';

const COINS = [
    {
        symbol: <MySVG.Bitcoin width={26} height={26} />,
        name: 'Bitcoin'
    },
    {
        symbol: <MySVG.Ethereum width={26} height={26} />,
        name: 'Ethereum'
    },
    {
        symbol: <MySVG.Cardano width={26} height={26} />,
        name: 'Cardano'
    },
    {
        symbol: <MySVG.Ripple width={26} height={26} />,
        name: 'Ripple'
    },
]

const CustodianCard = () => {

    const { colors } = useTheme();

    return (
        <Wrapper style={{ backgroundColor: colors.card }}>
            <CardHeader>
                <Typography size={20} weight="SemiBold">DIGIVAULT</Typography>
                <Label>Default Custodian</Label>
            </CardHeader>
            <Divider />

            <Typography variant='secondary' size={14} style={{ marginBottom: 12 }}>COUNTRY</Typography>
            <Div>
                <MySVG.UK style={{ marginRight: 10 }} />
                <Typography weight='Medium' size={18}>United Kingdom</Typography>
            </Div>
            <Typography variant='secondary' size={14} style={{ marginBottom: 12, marginTop: 12 }}>COUNTRY</Typography>

            {COINS.map((c, index) => (
                <Div
                    key={index}
                    style={{ marginBottom: 25 }}
                >
                    {c.symbol}
                    <Typography style={{ marginLeft: 15 }} size={14} weight="Medium">{c.name}</Typography>
                </Div>
            ))}

            <Typography variant="secondary" size={14} style={{ marginBottom: 12 }}>MAXIMUM VALUE</Typography>
            <Div>
                <MySVG.Dollar />
                <Typography style={{ marginLeft: 15 }} size={14} weight="Medium">15 Milion</Typography>
            </Div>

            <PrimaryButton style={{ marginTop: 13 }}>Contact Us</PrimaryButton>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    border-radius: 10px;
    padding: 16px;
`;

const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Div = styled.View`
    flex-direction: row;
    align-items: center;
`;

export default CustodianCard