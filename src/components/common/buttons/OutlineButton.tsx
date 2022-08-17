import styled from 'styled-components/native'
import Typography from '../typography/Typography';
import Icon from 'react-native-vector-icons/FontAwesome5';

const OutlineButton = ({
    variant = "primary",
    icon = null,
    text,
    ...rest
}) => {
    return (
        <Wrapper variant={variant} {...rest}>
            <Typography
                size={14}
                align="center"
                weight='Medium'
                style={{ color: variant === "primary" ? "#3e7eff" : "#E71D36" }}
            >
                {icon && <Icon name={icon} size={12} />} {text}
            </Typography>
        </Wrapper>
    )
};

const Wrapper = styled.TouchableOpacity`
    border: 1px solid;
    border-radius: 10px;
    border-color: ${({ variant }) => variant === "primary" ? "#3e7eff" : "rgba(231, 29, 54, 0.2)"};
    padding: 17px;
`;

export default OutlineButton