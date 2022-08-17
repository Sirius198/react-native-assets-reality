import { useTheme } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import Typography from '../common/typography/Typography';
import styled from 'styled-components/native';

const StatView = ({ portfolio, assets, terminated, active }) => {

    const { dark } = useTheme();
    const styles = dark ? darkStyles : lightStyles;

    return (
        <View>
            <Div>
                <Card dark={dark} style={{ marginRight: 6 }}>
                    <Typography variant='secondary' size={12}>
                        Portfolios
                    </Typography>
                    <Typography size={22} weight="SemiBold">
                        {portfolio}
                    </Typography>
                </Card>

                <Card dark={dark} style={{ marginLeft: 6 }}>
                    <Typography variant='secondary' size={12}>
                        Assets
                    </Typography>
                    <Typography size={22} weight="SemiBold">
                        {assets}
                    </Typography>
                </Card>
            </Div>

            <Div>
            <Card dark={dark} style={{ marginRight: 6 }}>
                    <Typography variant='secondary' size={12}>
                        Terminated operations
                    </Typography>
                    <Typography size={22} weight="SemiBold">
                        {terminated}
                    </Typography>
                </Card>

                <Card dark={dark} style={{ marginLeft: 6 }}>
                    <Typography variant='secondary' size={12}>
                        Active operations
                    </Typography>
                    <Typography size={22} weight="SemiBold">
                        {active}
                    </Typography>
                </Card>
            </Div>
        </View>
    )
};

const lightStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 20
    },
    item: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#F0F0FA',
        borderRadius: 5,
        backgroundColor: '#fff',
        width: '48%',
        margin: '1%',
    }
});

const darkStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 20
    },
    item: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'rgb(53,57,70)',
        borderRadius: 5,
        backgroundColor: 'rgb(36, 39, 47)',
        width: '48%',
        margin: '1%',
    }
});

const Div = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
`;

const Card = styled.View`
    flex: 1;
    padding: 13px 18px;
    border: 1px solid;
    border-radius: 10px;
    border-color: ${props => props.dark ? '#353946' : '#F0F0FA'};
    background-color: ${props => props.dark ? 'rgba(53, 57, 70, 0.25)' : '#FFF'};
`;

export default StatView;