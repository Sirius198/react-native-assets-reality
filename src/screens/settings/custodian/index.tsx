import { useLayoutEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native'
import Label from '../../../components/common/base/Label';
import Typography from '../../../components/common/typography/Typography';
import CustodianCard from '../../../components/settings/custodian/CustodianCard';

const SettingsCustodian = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography weight="Bold" size={18}>Choose from our partner</Typography>
                    <Typography weight="Bold" size={18}>custodians</Typography>
                </View>
            ),
        })
    }, []);

    return (
        <Wrapper>

            <Typography variant='secondary' size={16} style={{ marginBottom: 17 }}>
                Enable more custodians for your organization
            </Typography>

            <CustodianCard />
        </Wrapper>
    )
}

const Wrapper = styled.ScrollView`
    padding: 20px;
`;

export default SettingsCustodian