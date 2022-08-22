import { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native'
import Typography from '../typography/Typography';

export default function Dropdown({
    options = ['Option1', 'Option2'],
    ...rest
}) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    return (
        <Wrapper {...rest}>
            <Button onPress={() => setOpen(!open)}>
                <Typography>{value === '' ? 'Select' : value}</Typography>
            </Button>
            <Menu open={open}>
                {options.map((option, index) => (
                    <SubButton key={index} onPress={() => { setValue(option); setOpen(false) }}>
                        <Typography>{option}</Typography>
                    </SubButton>
                ))}
            </Menu>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    position: relative;
    z-index: 1000;
`;

const Button = styled.TouchableOpacity`
    padding: 11px 20px;
    border: 1px solid;
    border-color: ${props => props.dark ? '#353946' : '#E7E8EF'};
    background-color: ${props => props.dark ? 'rgba(53, 57, 70, 0.25)' : 'rgba(45, 116, 255, 0.02)'};
    border-radius: 8px;
`;

const Menu = styled.View`
    position: absolute;
    display: ${props => props.open ? 'flex' : 'none'};
    background-color: #AAA;
    z-index: 1000;
    width: 100%;
    top: 45px;
    z-index: 2002;
`;

const SubButton = styled.TouchableOpacity`
    padding: 11px 20px;
    border: 1px solid;
    border-color: ${props => props.dark ? '#353946' : '#E7E8EF'};
    background-color: ${props => props.dark ? 'rgba(53, 57, 70, 0.25)' : 'rgba(45, 116, 255, 0.02)'};
    border-radius: 8px;
`;