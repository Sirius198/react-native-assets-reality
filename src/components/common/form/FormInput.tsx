import { useTheme } from "@react-navigation/native";
import { StyleSheet, TextInput } from "react-native"
import styled from 'styled-components/native'

const FormInput = ({ placeholder = "", variant = "primary", ...rest }) => {
    const { dark } = useTheme();

    return (
        <Wrapper
            placeholder={placeholder}
            placeholderTextColor="#8A8B9D"
            dark={dark}
            variant={variant}
            {...rest}
        />
    )
}

const Wrapper = styled.TextInput`
    border-radius: 10px;
    margin-bottom: 12px;
    padding: 14px 20px;
    background-color: ${({ variant, dark }) =>
        variant === "primary" ?
            (dark ? '#1F2128' : '#F8FAFB') :
            (dark ? 'rgba(53, 57, 70, 0.25)' : '#FFF')
    };
    border: ${({ variant, dark }) => variant === "primary" ? 'none' : '1px solid'};
    border-color: ${({ dark }) => dark ? '#353946' : '#FFF'};
`;

export default FormInput