import { useTheme } from '@react-navigation/native';
import styled from 'styled-components/native'
import Typography from '../common/typography/Typography';
const ActivityLogItem = () => {
    const { colors } = useTheme();
    return (
        <Wrapper style={{ backgroundColor: colors.card }}>
            <Div>
                <Typography size={16}>Klondike</Typography>
                <Typography size={12} variant="secondary">16 days ago</Typography>
            </Div>
            <Typography size={12} variant="secondary">Transfered 2.013 BTC into Operation 11234</Typography>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    padding: 20px;
    border-radius: 10px;
    margin: 10px 0;
`;

const Div = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export default ActivityLogItem;