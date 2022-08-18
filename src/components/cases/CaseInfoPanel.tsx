import { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import Typography from '../common/typography/Typography';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native'
import IconBox from '../common/svg/IconBox';
import PrimaryButton from '../common/buttons/PrimaryButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@react-navigation/native';
import Divider from '../common/divider';
import Label from '../common/base/Label';

const CaseInfoPanel = ({ onInspect }) => {

    const { dark, colors: themeColors } = useTheme();
    const [expanded, setExpanded] = useState(false);
    const styles = lightStyles;

    return (
        <View style={{ marginBottom: 10 }}>
            <Wrapper style={{ backgroundColor: themeColors.card }}>
                <Row>
                    <View>
                        <Typography variant='secondary' size={12} weight="Light">Case Name</Typography>
                        <Typography variant='primary' size={16} weight="SemiBold">Klondike</Typography>
                    </View>
                    <Label variant='info'>Active</Label>
                </Row>

                <Divider />

                <Row>
                    <View>
                        <Typography variant='primary' size={16} weight="Bold">12</Typography>
                        <Typography variant='secondary' size={12}>Portfolios</Typography>
                    </View>
                    <View>
                        <Typography variant='primary' size={16} weight="Bold" align='right'>05</Typography>
                        <Typography variant='secondary' size={12}>Assets</Typography>
                    </View>
                </Row>

                <Divider />

                <Row>
                    <View>
                        <Typography variant='currency' size={16} weight="Bold">+₤11,145.52</Typography>
                        <Typography variant='secondary' size={12}>Recently Added</Typography>
                    </View>
                    <View>
                        <Typography variant='primary' size={16} weight="Bold" align="right">+₤11,145.52</Typography>
                        <Typography variant='secondary' size={12} align="right">Total Holdings</Typography>
                    </View>
                </Row>

                <Divider />

                <View style={{ flexDirection: 'row', }}>
                    <PrimaryButton
                        onPress={() => onInspect(1)}
                        style={{ flexGrow: 1, marginRight: 10 }}
                    >
                        Inspect
                    </PrimaryButton>
                    <ExpandButton onPress={() => setExpanded(!expanded)}>
                        <Text>
                            {expanded ?
                                <Icon name="chevron-up" size={16} color="#3e7eff" /> :
                                <Icon name="chevron-down" size={16} color="#3e7eff" />
                            }

                        </Text>
                    </ExpandButton>
                </View>

            </Wrapper>

            {expanded &&
                <ExpandPanel style={{ backgroundColor: themeColors.card }}>
                    <Typography variant='secondary' size={12} style={{ marginBottom: 5 }}>Recent Activity</Typography>

                    <View style={commonStyles.activityPanel}>
                        <View style={commonStyles.gridItem}>
                            <IconBox name="receive" color="blue" />
                            <TextGroup>
                                <Typography variant='primary' size={14}>Receive</Typography>
                                <Typography variant='secondary' size={12}>9:40 AM</Typography>
                            </TextGroup>
                        </View>
                        <View style={commonStyles.gridItem}>
                            <IconBox name="from" color="pink" />
                            <TextGroup>
                                <Typography variant='primary' size={14}>From</Typography>
                                <Typography variant='secondary' size={12}>9:40 AM</Typography>
                            </TextGroup>
                        </View>
                        <View style={commonStyles.gridItem}>
                            <IconBox name="amount" color="red" />
                            <TextGroup>
                                <Typography variant='primary' size={14}>Amount</Typography>
                                <Typography variant='secondary' size={12}>9:40 AM</Typography>
                            </TextGroup>
                        </View>
                        <View style={commonStyles.gridItem}>
                            <IconBox name="gasfee" color="green" />
                            <TextGroup>
                                <Typography variant='primary' size={14}>Gas Fee</Typography>
                                <Typography variant='secondary' size={12}>9:40 AM</Typography>
                            </TextGroup>
                        </View>
                    </View>
                </ExpandPanel>
            }
        </View>
    )
};

const lightStyles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 10,
    },
    li: {
        flexDirection: 'row',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-between'
    },
    caseStatus: {
        borderRadius: 100,
    },
    expandedContainer: {
        backgroundColor: '',
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 5,
        borderLeftColor: '#3e7eff',
        borderLeftWidth: 1
    }
});

const darkStyles = StyleSheet.create({
});

const commonStyles = StyleSheet.create({
    activityPanel: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gridItem: {
        width: '48%',
        flexDirection: 'row',
        marginBottom: 5
    },
    gridItemContent: {
        width: '48%'
    },
});

const Wrapper = styled.View`
    border-radius: 20px;
    padding: 20px;
    margin-top: 10px;
`;

const TextGroup = styled.View`
    margin-left: 10px;
`;

const ExpandPanel = styled.View`
    padding: 10px;
    marginRight: 10px;
    marginLeft: 10px;
    borderRadius: 5px;
    borderLeftColor: '#3e7eff';
    borderLeftWidth: 1px;
`;

const ExpandButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border: 1px solid #3E7EFF;
    background-color: rgba(62, 126, 255, 0.07);
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

const Row = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export default CaseInfoPanel;