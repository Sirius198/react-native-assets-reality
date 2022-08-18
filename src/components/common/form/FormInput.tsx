import { useTheme } from "@react-navigation/native";
import { StyleSheet, TextInput } from "react-native"
import styled from 'styled-components/native'

const FormInput = ({ placeholder = "", variant = "primary", ...rest }) => {
    const { dark } = useTheme();

    if (variant === "primary") {
        return (
            <WrapperPrimary
                placeholder={placeholder}
                placeholderTextColor="#8A8B9D"
                dark={dark}
                variant={variant}
                {...rest}
            />
        )
    }
    else if (variant === "secondary") {
        return (
            <WrapperSecondary
                placeholder={placeholder}
                placeholderTextColor="#8A8B9D"
                dark={dark}
                variant={variant}
                {...rest}
            />
        )
    }
    else if (variant === "bordered") {
        return (
            <WrapperThird
                placeholder={placeholder}
                placeholderTextColor="#8A8B9D"
                dark={dark}
                variant={variant}
                {...rest}
            />
        )
    }

    return <TextInput />
}

const Wrapper = styled.TextInput`
    border-radius: 10px;
    margin-bottom: 12px;
    padding: 14px 20px;
    border: 1px solid;
`;

const WrapperPrimary = styled(Wrapper)`
    background-color: ${({ dark }) => dark ? '#1F2128' : '#F8FAFB'};
    border-color: ${({ dark }) => dark ? '#1F2128' : '#F8FAFB'};
`;

const WrapperSecondary = styled(Wrapper)`
    background-color: ${({ dark }) => dark ? 'rgba(53, 57, 70, 0.25)' : '#FFF'};
    border-color: ${({ dark }) => dark ? '#353946' : '#FFF'};
`;

const WrapperThird = styled(Wrapper)`
    background-color: ${({ dark }) => dark ? '#242731' : '#FFF'};
    border-color: ${({ dark }) => dark ? '#242731' : 'rgba(35, 38, 47, 0.1)'};
`;

export default FormInput