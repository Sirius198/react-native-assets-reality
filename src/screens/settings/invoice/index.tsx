import { useLayoutEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native'
import MainContentWrapper from '../../../components/common/base/MainContentWrapper';
import Typography from '../../../components/common/typography/Typography';
import InvoiceCard from '../../../components/settings/invoice/InvoiceCard';

const SettingsInvoice = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography size={14}>Invoices displayed from asset reality </Typography>
                    <Typography weight="Bold" size={18}>Invoice History</Typography>
                </View>
            ),
        })
    }, []);

    return (
        <MainContentWrapper>
            {[1, 2,].map((_, index) => (
                <InvoiceCard
                    key={index}
                    onDownload={() => { }}
                    onRemove={() => { }}
                />
            ))}
        </MainContentWrapper>
    )
};

export default SettingsInvoice