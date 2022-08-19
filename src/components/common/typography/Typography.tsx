import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

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
    // right = false,
    children,
    ...rest
}) => {

    const { dark } = useTheme();

    return (
        <Wrapper fontSize={size} variant={variant} dark={dark} weight={weight} align={align} {...rest}>
            {children}
        </Wrapper>
    )

    // return (
    //     <Text
    //         style={{
    //             ...(dark ? darkStyles[variant] : lightStyles[variant]),
    //             fontSize: size,
    //             textAlign: align,
    //             // ...(right && { textAlign: 'right' }),
    //             fontFamily: 'FF_' + weight,
    //         }}
    //         {...rest}
    //     >
    //         {children}
    //     </Text>
    // )
}

const Wrapper = styled.Text`
    font-size: ${props => props.fontSize}px;
    text-align: ${props => props.align};
    font-family: FF_${props => props.weight};
    color: ${({ variant, dark }) => {
        if (variant === 'primary')
            return dark ? '#FFF' : '#23262f';
        else if (variant === 'secondary')
            return '#8a8b9d';
        else if (variant === 'currency')
            return '#1fa349';
        else if (variant === 'percent')
            return '#45D8C8';
        else if (variant === 'active')
            return '#FFF';
    }};
`;

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