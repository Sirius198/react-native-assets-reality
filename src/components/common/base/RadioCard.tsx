import { useTheme } from '@react-navigation/native';
import styled from 'styled-components/native'

export default function RadioCard({ children, ...rest }) {

    const { dark } = useTheme();

    return (
        <Wrapper dark={dark} {...rest}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.TouchableOpacity`
    padding: 12px 15px;
    border: 1px solid;
    border-radius: 8px;
    background-color: rgba(45, 116, 255, 0.02);
    border-color: ${props => props.dark ? '#353946' : '#E7E8EF'};
    margin-bottom: 16px;
`;