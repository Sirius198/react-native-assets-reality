import { View } from "react-native";
import styled from 'styled-components/native'

export default function MainContentWrapper({children, ...rest}) {
    return (
        <Wrapper {...rest}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.ScrollView`
    padding: 0px 20px 20px 20px;
`;