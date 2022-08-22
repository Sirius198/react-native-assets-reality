import styled from 'styled-components/native'

export const PrimaryButton = styled.TouchableOpacity`
    background-color: #3e7eff;
    padding: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const SecondaryButton = styled(PrimaryButton)`
    background-color: #F7F8FA;
`;

export const OutlineButton = styled.TouchableOpacity`
    padding: 15px;
    color: #3e7eff;
    border-radius: 10px;
    border: 1px solid #3e7eff;
`;