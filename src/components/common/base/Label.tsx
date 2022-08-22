import { useTheme } from '@react-navigation/native';
import styled from 'styled-components/native'
import Typography from '../typography/Typography';

const Label = ({ variant = "primary", children, ...rest }) => {
    const { dark } = useTheme();
    return (
        <Wrapper variant={variant} dark={dark} {...rest}>
            <Typography
                size={12}
                weight="Medium"
                style={{ color: variant === "primary" ? "#367eff" : variant === "info" ? "#20C54D" : "#111" }}
            >
                {children}
            </Typography>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    padding: 7px 20px;
    border-radius: 100px;
    border: 1px solid;
    background-color: ${({ variant, dark }) => {
        // if (variant === "info") return 'rgba(32, 197, 77, 0.05)';
        if (variant === "info")
            return dark ? '#243033' : '#F0FEF1';
        if (variant === "primary")
            return dark ? "#282C36" : "#F5F9FF";
        return "";
    }};
    border-color: ${({ variant, dark }) => {
        if (variant === "info")
            return dark ? '#243033' : '#F0FEF1';
        if (variant === "primary")
            return dark ? "#282C36" : "#F5F9FF";
        return "";
    }}
`;

export default Label;