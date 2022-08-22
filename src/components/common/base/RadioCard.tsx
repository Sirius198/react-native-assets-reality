import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import styled from 'styled-components/native'
import MySVG from '../svg';
import Typography from '../typography/Typography';
import IconWrapper from './IconWrapper';

export default function RadioCard({
    active = false,
    title = "",
    subtitle = "",
    icon = null,
    ...rest
}) {

    const { dark } = useTheme();

    return (
        <Wrapper dark={dark} active={active} {...rest}>
            <View style={{ maxWidth: icon ? '80%' : '100%' }}>
                {active ?
                    <>
                        <Typography weight="SemiBold" style={{ color: '#FFF', marginBottom: 5 }}>{title}</Typography>
                        <Typography size={12} style={{ color: '#FFF', lineHeight: 20 }}>{subtitle}</Typography>
                    </>
                    :
                    <>
                        <Typography weight="SemiBold" style={{ marginBottom: 5 }}>{title}</Typography>
                        <Typography size={12} variant="secondary" style={{ lineHeight: 20 }}>{subtitle}</Typography>
                    </>
                }
            </View>

            {icon &&
                <IconWrapper type={2} radius={50} active={active}>
                    {icon}
                </IconWrapper>
            }
        </Wrapper>
    )
}

const Wrapper = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px;
    border: 1px solid;
    border-radius: 8px;
    background-color: ${props => props.active ? '#3E7EFF' : 'rgba(45, 116, 255, 0.02)'};
    border-color: ${props => props.dark ? '#353946' : '#E7E8EF'};
    margin: 8px 0;
`;