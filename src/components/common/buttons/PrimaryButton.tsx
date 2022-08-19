import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export default function PrimaryButton({ children, onPress = null, ...rest }) {
    return (
        <Wrapper onPress={onPress} {...rest}>
            <Text style={styles.innerText}>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.TouchableOpacity`
    background-color: #3e7eff;
    border-radius: 10px;
`;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3e7eff',
        borderRadius: 10
    },
    innerText: {
        textAlign: 'center',
        color: '#fff',
        padding: 10,
        fontFamily: 'FF_Medium',
    }
});