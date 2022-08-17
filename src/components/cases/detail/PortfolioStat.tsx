import { View, StyleSheet } from "react-native"
import Typography from "../../common/typography/Typography";
import styled from 'styled-components/native';
import PrimaryButton from "../../common/buttons/PrimaryButton";
import { useTheme } from "@react-navigation/native";

const PortfolioStat = () => {

    const { dark, colors } = useTheme();
    return (
        <Wrapper style={{ backgroundColor: colors.card }}>
            <Typography variant="primary" size={16} style={{ marginBottom: 20 }}>Portfolio Statistics</Typography>

            <StatRow dark={dark}>
                <Typography variant="secondary">All Time High</Typography>
                <Typography variant="primary">£3,470.81</Typography>
            </StatRow>

            <StatRow odd dark={dark}>
                <Typography variant="secondary">Number of Assets</Typography>
                <Typography variant="primary">13</Typography>
            </StatRow>

            <StatRow dark={dark}>
                <Typography variant="secondary">Custodians Used</Typography>
                <Typography variant="primary">01</Typography>
            </StatRow>

            <StatRow odd dark={dark}>
                <Typography variant="secondary">Share in Operation</Typography>
                <Typography variant="primary">£3,470.81</Typography>
            </StatRow>

            <StatRow dark={dark}>
                <Typography variant="secondary">Portfolio Status</Typography>
                <Typography variant="currency">Active</Typography>
            </StatRow>

            <StatRow odd dark={dark}>
                <Typography variant="secondary">Latest Update</Typography>
                <View>
                    <Typography right>17:54</Typography>
                    <Typography right>20/02/2022</Typography>
                </View>
            </StatRow>

            <PrimaryButton>Export Report</PrimaryButton>
        </Wrapper>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 10,
//         borderRadius: 10,
//         padding: 20,
//         backgroundColor: '#fff',
//     }
// });

const Wrapper = styled.View`
    margin-top: 10px;
    border-radius: 10px;
    padding: 20px;
`;

const StatRow = styled.View`
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    background-color: ${props => props.odd ? 'transparent' : props.dark ? 'rgba(53, 57, 70, 0.25)' : '#fafaff'};
    border: 1px solid;
    border-color: ${props => props.odd ? 'transparent' : props.dark ? 'rgb(53, 57, 70)' : '#fafaff'};
    align-items: center;
`;

export default PortfolioStat;