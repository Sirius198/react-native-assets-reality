import { useTheme } from "@react-navigation/native";
import { Text, View, TextInput } from "react-native"
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { VDivider } from "../divider";
import MySVG from "../svg";
import FormInput from "../form/FormInput";

const SearchBox = ({ ...rest }) => {

    const { dark, colors } = useTheme();

    return (
        <Wrapper bk={colors.card} {...rest}>
            {/* <Icon name="search" size={15} /> */}
            <MySVG.Search style={{ color: dark ? '#8A8B9D' : '#130F26' }} />
            <VDivider />

            <TextInput style={{
                flex: 1,
            }} />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    border-radius: 10px;
    padding: 18px 20px;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.bk};
`;

export default SearchBox;