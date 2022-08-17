import { useTheme } from '@react-navigation/native';
import styled from 'styled-components/native'

const Card2 = ({ children, ...rest }) => {
    const { dark } = useTheme();
    return (
        <Wrapper dark={dark} {...rest}>{children}</Wrapper>
    )
};

const Wrapper = styled.View`
    border-radius: 10px;
    padding: 16px;
    border: 1px solid;
    background-color: ${({ dark }) => dark ? 'rgba(53, 57, 70, 0.25)' : '#fff'};
    border-color: ${({ dark }) => dark ? 'rgb(53, 57, 70)' : '#EEEEEE'};
    margin-bottom: 16px;
`;

export default Card2;