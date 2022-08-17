import { useTheme } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import Label from '../../common/base/Label';
import Divider from '../../common/divider';
import Typography from '../../common/typography/Typography';
import Icon from 'react-native-vector-icons/FontAwesome5';

const UserCard = ({ onAttemptChangeRole }) => {
    const { colors } = useTheme()

    return (
        <Wrapper style={{ backgroundColor: colors.card }} >
            <Li>
                <View>
                    <Typography variant="secondary" size={12}>Name</Typography>
                    <Typography size={14} weight="SemiBold">John Doe</Typography>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Label>Admin</Label>
                    <KebabMenu onPress={() => onAttemptChangeRole(0)}>
                        <Icon name="ellipsis-v" size={15} color="#8A8B9D" />
                    </KebabMenu>
                </View>
            </Li>
            <Divider />

            <Li>
                <View>
                    <Typography size={14} weight="SemiBold">johndoe2211@gmail.com</Typography>
                    <Typography variant="secondary" size={12}>Email</Typography>
                </View>
            </Li>
            <Divider />

            <Li>
                <View>
                    <Typography size={14} weight="SemiBold">Nov 12 2022</Typography>
                    <Typography variant="secondary" size={12}>Date assigned</Typography>
                </View>
                <View>
                    <Typography size={14} weight="SemiBold">Dec 12 2022</Typography>
                    <Typography variant="secondary" size={12}>Lastest activity</Typography>
                </View>
            </Li>
        </Wrapper >
    )
}

const Wrapper = styled.View`
    padding: 16px;
    margin-bottom: 12px;
    border-radius: 10px;
`;

const Li = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const KebabMenu = styled.TouchableOpacity`
    padding: 0 10px;
    margin-left: 10px;
`;

export default UserCard;