import styled from 'styled-components/native';
import { useTheme } from "@react-navigation/native";

export default function IconWrapper({
    size = 50,
    radius = 10,
    type = 1,
    active = false,
    children,
    ...rest
}) {

    const { dark } = useTheme();

    if (type === 1) {
        return (
            <Wrapper dark={dark} size={size} radius={radius} {...rest}>
                {children}
            </Wrapper>
        )
    }

    // RadioCard (implemented in AddAssetModal)
    if (type === 2) {
        return (
            <Wrapper2 dark={dark} size={size} radius={radius} active={active} {...rest}>
                {children}
            </Wrapper2>
        )
    }

    if (type === 3) {
        return (
            <Wrapper3 dark={dark} size={size} radius={radius} active={active} {...rest}>
                {children}
            </Wrapper3>
        )
    }

    return <></>
}

const Wrapper = styled.View`
    border: 1px solid;
    background-color: ${props => props.dark ? 'rgba(53, 57, 70, 0.25)' : '#FAFAFF'};
    border-color: ${props => props.dark ? '#353946' : '#FAFAFF'};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: ${props => props.radius}px;
    align-items: center;
    justify-content: center;
`;

const Wrapper2 = styled(Wrapper)`
    background-color: ${props => props.active ? '#6195FB' : props.dark ? 'rgba(53, 57, 70, 0.25)' : '#F3F3FF'};
    border-color: ${props => props.active ? '#6195FB' : props.dark ? '#353946' : '#F3F3FF'};
`;

const Wrapper3 = styled(Wrapper)`
    background-color: ${props => props.active ? '#6196FB' : props.dark ? 'rgba(53, 57, 70, 0.25)' : '#F7F7FE'};
    border-color: ${props => props.active ? '#6196FB' : props.dark ? '#353946' : '#F7F7FE'};
`;