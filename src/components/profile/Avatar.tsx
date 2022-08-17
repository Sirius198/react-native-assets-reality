import { View } from "react-native"
import styled from 'styled-components/native'
import Typography from "../common/typography/Typography";

const UserAvatar = ({ alt }) => {
    return (
        <Wrapper>
            <InnerDiv>
                <Typography size={22} style={{ color: 'white' }}>{alt}</Typography>
            </InnerDiv>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    border: 1px dashed #E2E6EB;
    border-radius: 100px;
    width: 130px;
    height: 130px;
    padding: 10px;
`;

const InnerDiv = styled.View`
    border-radius: 100px;
    background-color: #00A3AA;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export default UserAvatar;