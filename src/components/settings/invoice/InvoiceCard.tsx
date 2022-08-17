import { useTheme } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native'
import Label from '../../common/base/Label';
import Divider from '../../common/divider';
import MySVG from '../../common/svg';
import Typography from '../../common/typography/Typography';

const InvoiceCard = ({ onDownload, onRemove }) => {
    const { dark, colors } = useTheme();

    return (
        <Wrapper style={{ backgroundColor: colors.card }}>

            <Div>
                <View>
                    <Typography variant='secondary' size={12}>Name</Typography>
                    <Typography weight="SemiBold">John Doe</Typography>
                </View>
                <Div>
                    <Label variant='info' style={{ marginRight: 16 }}>Paid</Label>
                    <TouchableOpacity onPress={onRemove}>
                        <MySVG.Trash style={{ color: '#8A8B9D' }} />
                    </TouchableOpacity>
                </Div>
            </Div>
            <Divider />

            <Div>
                <View>
                    <Typography weight="SemiBold">johnedoe@gmail.com</Typography>
                    <Typography variant='secondary' size={12}>Email</Typography>
                </View>
            </Div>
            <Divider />

            <Div>
                <View>
                    <Typography weight="SemiBold">Nov 12 2022</Typography>
                    <Typography variant='secondary' size={12}>Date</Typography>
                </View>
                <TouchableOpacity
                    style={{ justifyContent: 'flex-end' }}
                    onPress={onDownload}
                >
                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row', }}>
                        <MySVG.Download style={{ color: '#8A8B9D' }} />
                    </View>
                    <Typography size={12} variant="secondary">Download Invoice</Typography>
                </TouchableOpacity>
            </Div>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 12px;
`;

const Div = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export default InvoiceCard;