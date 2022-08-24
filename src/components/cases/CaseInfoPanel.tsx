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
import IconWrapper from '../common/base/IconWrapper';
import MySVG from '../common/svg';

const CaseInfoPanel = ({ onInspect, value }) => {

    const { dark, colors: themeColors } = useTheme();
    const [expanded, setExpanded] = useState(false);

    return (
        <View style={{ marginBottom: 10 }}>
            <Wrapper style={{ backgroundColor: themeColors.card }}>
                <Row>
                    <View>
                        <Typography variant='secondary' size={12} weight="Light">Case Name</Typography>
                        <Typography variant='primary' size={16} weight="SemiBold">{value.operation_name}</Typography>
                    </View>
                    <Label variant='info'>Active</Label>
                </Row>

                <Divider />

                <Row>
                    <View>
                        <Typography variant='primary' size={16} weight="Bold">{value.portfolio_count}</Typography>
                        <Typography variant='secondary' size={12}>Portfolios</Typography>
                    </View>
                    <View>
                        <Typography variant='primary' size={16} weight="Bold" align='right'>{value.asset_count}</Typography>
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
                        onPress={() => onInspect(value)}
                        style={{ flex: 1, marginRight: 10 }}
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
                    <View style={commonStyles.expandPanel}>
                        <Typography variant='secondary' size={12} style={{ marginBottom: 5 }}>Recent Activity</Typography>

                        <View style={commonStyles.activityPanel}>
                            <View style={commonStyles.gridItem}>
                                <IconWrapper style={{ backgroundColor: 'rgba(62, 126, 255, 0.1)' }}>
                                    <MySVG.Withdrawal style={{ color: '#3E7EFF' }} />
                                </IconWrapper>
                                <TextGroup>
                                    <Typography variant='primary' weight='Medium' size={14}>Receive</Typography>
                                    <Typography variant='secondary' size={12}>9:40 AM</Typography>
                                </TextGroup>
                            </View>
                            <View style={commonStyles.gridItem}>
                                <IconWrapper style={{ backgroundColor: 'rgba(138, 62, 255, 0.06)' }}>
                                    <MySVG.From style={{ color: '#8A3EFF' }} />
                                </IconWrapper>
                                <TextGroup>
                                    <Typography variant='primary' weight='Medium' size={14}>From</Typography>
                                    <Typography variant='secondary' size={12}>9:40 AM</Typography>
                                </TextGroup>
                            </View>
                            <View style={commonStyles.gridItem}>
                                <IconWrapper style={{ backgroundColor: 'rgba(242, 147, 57, 0.1)' }}>
                                    <MySVG.DollarCircle style={{ color: '#F29339' }} />
                                </IconWrapper>
                                <TextGroup>
                                    <Typography variant='primary' weight='Medium' size={14}>Amount</Typography>
                                    <Typography variant='secondary' size={12}>9:40 AM</Typography>
                                </TextGroup>
                            </View>
                            <View style={commonStyles.gridItem}>
                                <IconWrapper style={{ backgroundColor: 'rgba(95, 220, 179, 0.13)' }}>
                                    <MySVG.Gas style={{ color: '#1BE3A2' }} />
                                </IconWrapper>
                                <TextGroup>
                                    <Typography variant='primary' weight='Medium' size={14}>Gas Fee</Typography>
                                    <Typography variant='secondary' size={12}>9:40 AM</Typography>
                                </TextGroup>
                            </View>
                        </View>
                    </View>
                </ExpandPanel>
            }
        </View>
    )
};

const commonStyles = StyleSheet.create({
    activityPanel: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gridItem: {
        width: '48%',
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center'
    },
    gridItemContent: {
        width: '48%'
    },
    expandPanel: {
        borderLeftWidth: 1,
        borderLeftColor: '#3e7eff',
        paddingLeft: 16,
        paddingRight: 16,
    }
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
    padding: 10px 0;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 5px;
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export default CaseInfoPanel;