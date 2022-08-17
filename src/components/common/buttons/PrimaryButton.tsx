import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PrimaryButton({ children, style = {}, onPress = null, ...rest }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...style }} {...rest}>
            <Text style={styles.innerText}>{children}</Text>
        </TouchableOpacity>
    )
}

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