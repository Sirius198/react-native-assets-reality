import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native'
import Divider from '../../../common/divider';
import Card2 from '../../../common/modal/Card2';
import MySVG from '../../../common/svg';
import Typography from '../../../common/typography/Typography';

const InvitingMember = ({ name, email, onRemove }) => {
    // const {dark} = 
    return (
        <Card2>
            <Div>
                <View>
                    <Typography variant='secondary' size={12}>Name</Typography>
                    <Typography weight='SemiBold' size={14}>{name}</Typography>
                </View>
                <Div>
                    <TouchableOpacity onPress={onRemove}>
                        <MySVG.Trash style={{ color: '#8A8B9D' }} />
                    </TouchableOpacity>
                </Div>
            </Div>

            <Divider size={12} />

            <Div>
                <View>
                    <Typography weight='SemiBold' size={14}>{email}</Typography>
                    <Typography variant='secondary' size={12}>Email</Typography>
                </View>
            </Div>
        </Card2>
    )
};

// const Wrapper = styled.View`
//     border-radius: 10px;
//     padding: 16px;
// `;

const Div = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export default InvitingMember;