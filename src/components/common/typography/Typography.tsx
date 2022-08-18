import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TypographyProps {
    variant: 'primary' | 'secondary' | 'currency' | 'percent';
    size: number;
    align: 'center' | 'right' | 'left';
    weight: 'regular' | 'medium';
}

const Typography = ({
    variant = 'primary',
    weight = 'Regular',
    size = 14,
    align = 'left',
    right = false,
    children,
    style = {}
}) => {

    const { dark } = useTheme();

    return (
        <Text
            style={{
                ...(dark ? darkStyles[variant] : lightStyles[variant]),
                fontSize: size,
                textAlign: align,
                ...(right && { textAlign: 'right' }),
                fontFamily: 'FF_' + weight,
                ...style
            }}
        >
            {children}
        </Text>
    )
}

const lightStyles = StyleSheet.create({
    primary: {
        color: '#23262f',
    },
    secondary: {
        color: '#8a8b9d'
    },
    currency: {
        color: '#1fa349'
    },
    percent: {
        color: '#45D8C8'
    },
    active: {
        color: '#FFF'
    }
});

const darkStyles = StyleSheet.create({
    primary: {
        color: '#fff',
    },
    secondary: {
        color: '#8a8b9d'
    },
    currency: {
        color: '#1fa349'
    },
    percent: {
        color: '#45D8C8'
    },
    active: {
        color: '#FFF'
    }
});

export default Typography;