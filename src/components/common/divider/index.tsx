import { useTheme } from '@react-navigation/native';
import styled from 'styled-components/native'
import { View } from 'react-native'

const Divider = ({ size = 16 }) => {
    const { dark } = useTheme();

    return (<Wrapper dark={dark} size={size} />)
}

const Wrapper = styled.View`
    height: 1px;
    margin: ${props => props.size}px 0;
    background-color: ${props => props.dark ? '#2E313C' : '#F8F8F8'};
`;

export const VDivider = () => {
    const { dark } = useTheme();

    return (<VWrapper dark={dark} />)
}

const VWrapper = styled.View`
    width: 1px;
    height: 100%;
    margin: 0 10px;
    background-color: ${props => props.dark ? '#EEEEEE' : '#EEEEEE'};
`;

export default Divider;