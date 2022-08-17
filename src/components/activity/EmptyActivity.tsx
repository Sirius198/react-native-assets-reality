import { Text } from 'react-native';
import styled from 'styled-components/native'

const EmptyActivity = () => {
    return (
        <Wrapper>
            <Text>It's an empty activity</Text>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export default EmptyActivity;