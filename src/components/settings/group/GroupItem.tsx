import { View } from 'react-native';
import styled from 'styled-components/native'
import Avatar from '../../common/base/Avatar';
import Typography from '../../common/typography/Typography';
const GroupItem = ({ name = "Design", memberCount = 5, ...rest }) => {
    return (
        <Wrapper {...rest}>
            <Avatar alt={"D"} />

            <View style={{ marginLeft: 13 }}>
                <Typography size={16} weight="SemiBold">{name}</Typography>
                <Typography variant='secondary' size={14}>{memberCount} Members</Typography>
            </View>
        </Wrapper>
    )
};

const Wrapper = styled.TouchableOpacity`
    // background-color: #555;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
`;

export default GroupItem;