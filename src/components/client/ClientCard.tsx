import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Label from '../common/base/Label';
import Divider from '../common/divider';
import MySVG from '../common/svg';
import Typography from '../common/typography/Typography';

export default function ClientCard({ ...rest }) {

    const { dark, colors } = useTheme();

    return (
        <Wrapper style={{ backgroundColor: colors.card }} {...rest}>
            <Div align={"flex-start"}>
                <View>
                    <Typography size={12} weight="Light" variant='secondary'>Client Name</Typography>
                    <Typography size={16} weight="SemiBold">Mo Eid</Typography>
                </View>
                <Typography size={12} variant="secondary">16 Days Ago</Typography>
            </Div>

            <Divider />

            <Typography size={12} weight="Light" variant='secondary'>Contact Number</Typography>
            <Div align="center" style={{ marginTop: 6 }}>
                <Label>+447857927649239</Label>
                <CopyButton>
                    <Typography weight='Medium' size={12} style={{ marginRight: 5 }}>Copy</Typography>
                    <MySVG.Copy style={{ color: dark ? '#FFF' : '#23262F' }} />
                </CopyButton>
            </Div>

            <Divider />

            <View>
                <Typography size={12} weight="Light" variant='secondary'>Owner Name</Typography>
                <Typography size={16} weight="SemiBold">Org Owner Name</Typography>
            </View>
        </Wrapper>
    )
}

const Wrapper = styled.TouchableOpacity`
    padding: 16px;
    margin-bottom: 12px;
`;

const Div = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: ${props => props.align};
`;

const CopyButton = styled.View`
    flex-direction: row;
    padding: 10px 12px;
    align-items: center;
    background-color: rgba(62, 126, 255, 0.05);
    border-radius: 40px;
`;