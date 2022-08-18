import { Text, View, TouchableOpacity } from "react-native";
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5';

const PageHeader = ({ title, onGoBack = null }) => {
    return (
        <Wrapper>
            <TitleWrapper>
                {onGoBack != null &&
                    <BackButtonWrapper onPress={() => onGoBack()}>
                        <Text>
                            <Icon name="angle-left" size={20} color="#363853" />
                        </Text>
                    </BackButtonWrapper>
                }
                {title}
            </TitleWrapper>

            {/* Notifications */}
            <View>
            </View>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 20px;
`;

const TitleWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

const BackButtonWrapper = styled.TouchableOpacity`
    background-color: rgb(237, 237, 237);
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    margin-right: 10px;
`;

export default PageHeader;