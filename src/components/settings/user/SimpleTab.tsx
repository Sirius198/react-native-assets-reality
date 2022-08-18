import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import styled from 'styled-components/native'
import Typography from "../../common/typography/Typography";

const SimpleTab = ({ list }) => {
    const [activeId, setActiveId] = useState(0);
    const theme = useTheme();

    return (
        <Wrapper>
            {list.map((title, index) => (
                <TabItem
                    key={index}
                    active={activeId === index}
                    first={index === 0}
                    last={index === list.length - 1}
                    onPress={() => setActiveId(index)}
                    theme={theme}
                >
                    <Typography
                        align="center"
                        size={14}
                        weight="Medium"
                        style={{ color: activeId === index ? 'white' : '#8A8B9D' }}
                    >
                        {title}
                    </Typography>
                </TabItem>
            ))}
        </Wrapper>
    )
};

const Wrapper = styled.View`
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex-grow: 1;
    background-color: ${props => props.active ? '#3e7eff' : props.theme.colors.card};
    padding: 17px;
    border-top-left-radius: ${props => props.first ? 10 : 0}px;
    border-bottom-left-radius: ${props => props.first ? 10 : 0}px;
    border-top-right-radius: ${props => props.last ? 10 : 0}px;
    border-bottom-right-radius: ${props => props.last ? 10 : 0}px;
    margin: ${props => (props.first || props.last) ? '0px' : '0 1px'};
`;

export default SimpleTab;