import styled from 'styled-components/native'

export const Wrapper = styled.View`
    padding: 20px;
    flex: 1;
`;

export const SettingCategoryButtonWrapper = styled.TouchableOpacity`
    border-radius: 10px;
    padding: 12px 25px;
    flex-direction: row;
    border: 1px solid;
    border-color: ${props => props.dark ? 'transparent' : '#E2E6EB'};
    background-color: ${props => props.dark ? '#242731' : 'transparent'};
    margin-bottom: 16px;
    align-items: center;
`;

export const ButtonContent = styled.View`
    margin-left: 12px;
`;