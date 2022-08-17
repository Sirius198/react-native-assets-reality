import { useTheme } from "@react-navigation/native";
import styled from 'styled-components/native';

const MenuIconWrapper = ({ name = "", size = 50, radius = 10, children }) => {

    const { dark } = useTheme();

    return (
        <Wrapper dark={dark} size={size} radius={radius}>
            {children}
        </Wrapper>
    )
};

const Wrapper = styled.View`
    border: 1px solid;
    background-color: ${props => props.dark ? 'rgba(53, 57, 70, 0.25)' : '#F7F7FE'};
    border-color: ${props => props.dark ? '#353946' : '#F7F7FE'};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: ${props => props.radius}px;
    align-items: center;
    justify-content: center;
`;

export default MenuIconWrapper;