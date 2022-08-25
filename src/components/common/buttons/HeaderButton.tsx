import { useTheme } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet } from "react-native";
import styled from 'styled-components/native';
import MySVG from "../svg";

export default function HeaderButton({ type = 'back', ...rest }) {
    const { dark } = useTheme();
    return (
        <Wrapper dark={dark} {...rest}>
            {type === 'back' && <MySVG.AngleLeft style={{ color: dark ? '#FFF' : '#363853' }} />}
            {type === 'close' && <MySVG.XIcon style={{ color: '#8A8B9D' }} />}
        </Wrapper>
    )
}

const Wrapper = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    background-color: ${props => props.dark ? 'transparent' : '#EDEDED'};
    border-color: ${props => props.dark ? '#353946' : '#EDEDED'};
`;

const styles = StyleSheet.create({
    wrapper_light: {
        width: 42,
        height: 42,
        borderRadius: 100,
        backgroundColor: '#EDEDED',
        alignItems: 'center',
        justifyContent: 'center',
    }
});