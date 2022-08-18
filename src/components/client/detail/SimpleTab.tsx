import { useTheme } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import IconWrapper from '../../common/base/IconWrapper';
import MySVG from '../../common/svg';
import Typography from '../../common/typography/Typography';

export default function SimpleTab({ onChange }) {

    const [selected, setSelected] = useState(0);
    const { dark, colors } = useTheme();

    useEffect(() => {
        onChange(selected);
    }, [selected]);

    return (
        <Wrapper>
            <Button
                active={selected === 0}
                backgroundColor={colors.card}
                onPress={() => setSelected(0)}
                style={{ marginRight: 12 }}
            >
                <IconWrapper type={3} active={selected === 0}>
                    <MySVG.Email style={{ color: dark || selected === 0 ? '#FFF' : '#23262F' }} />
                </IconWrapper>
                <Typography weight='SemiBold' variant={selected === 0 ? 'active' : 'primary'}>Operations</Typography>
            </Button>

            <Button
                active={selected === 1}
                backgroundColor={colors.card}
                onPress={() => setSelected(1)}
            >
                <IconWrapper type={3} active={selected === 1}>
                    <MySVG.Email style={{ color: dark || selected === 1 ? '#FFF' : '#23262F' }} />
                </IconWrapper>
                <Typography weight='SemiBold' variant={selected === 1 ? 'active' : 'primary'}>Organisation Details</Typography>
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex-direction: row;
`;

const Button = styled.TouchableOpacity`
    flex: 1;
    padding: 16px;
    border-radius: 15px;
    background-color: ${props => props.active ? '#3E7EFF' : props.backgroundColor};
    align-items: center;
`;