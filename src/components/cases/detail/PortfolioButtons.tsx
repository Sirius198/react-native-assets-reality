import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native"
import Typography from "../../common/typography/Typography";
import styled from 'styled-components/native';

const PortfolioButtons = ({ activeId, onChange, portfolios }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        setActiveIndex(activeId);
    }, [activeId]);

    return (
        <ScrollView horizontal style={{ marginTop: 0 }} showsHorizontalScrollIndicator={false}>
            {portfolios.map((value, index) => (
                <PfButton
                    key={index}
                    active={index === activeIndex}
                    index={index}
                    onPress={(i: number) => { setActiveIndex(i); onChange(i); }}
                />
            ))}
        </ScrollView>
    )
};

const PfButton = ({ active, index, onPress }) => {
    return (
        <PfButtonWrapper active={active} onPress={() => onPress(index)}>
            <Typography
                size={14}
                weight={active ? "SemiBold" : "Regular"}
                variant={active ? "active" : "secondary"}
            >
                Portfolio {index + 1}
            </Typography>
        </PfButtonWrapper>
    )
}

const PfButtonWrapper = styled.TouchableOpacity`
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 10px;
    background-color: ${props => props.active ? "#3E7EFF" : 'transparent'};
    border: 1px solid;
    border-color: ${props => props.active ? "#3E7EFF" : "#EFEFFA"};
`;

export default PortfolioButtons;