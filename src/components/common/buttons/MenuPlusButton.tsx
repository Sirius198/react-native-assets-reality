import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5';

const MenuPlusButton = ({ name = "plus", ...rest }) => {
    return (
        <Wrapper {...rest}>
            <Icon name={name} color="white" size={12} />
        </Wrapper>
    )
};

const Wrapper = styled.TouchableOpacity`
    width: 38px;
    height: 38px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    background-color: #3E7EFF;
    margin-right: 10px;
`;
export default MenuPlusButton
