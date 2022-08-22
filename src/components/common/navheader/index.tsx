import styled from 'styled-components/native';

export default function MyNavHeader(props) {
    // console.log('yei', props.navigation.canGoBack())
    return (
        <Wrapper style={props.options.headerStyle}>
            <Left>
                {props.navigation.canGoBack() && props.options.headerLeft(props.navigation)}
                {props.options.headerTitle && props.options.headerTitle(props)}
            </Left>
            <Right>
                {props.options.headerRight && props.options.headerRight(props)}
            </Right>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px 20px 20px;
`;

const Left = styled.View`
    flex-direction: row;
    align-items: center;
`;
const Right = styled.View``;