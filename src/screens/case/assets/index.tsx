import { useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native'
import AssetItem from '../../../components/cases/detail/AssetItem';
import AddAssetModal from '../../../components/cases/modal/AddAssetModal';
import AssetQRCodeModal from '../../../components/cases/modal/AssetQRCodeModal';
import AssetQuickActionModal from '../../../components/cases/modal/AssetQuickActionModal';
import MenuPlusButton from '../../../components/common/buttons/MenuPlusButton';
import SearchBox from '../../../components/common/input/SearchBox';
import Typography from '../../../components/common/typography/Typography';

export default function TotalAssetsPage({ navigation }) {

    const [showAddAssetModal, setShowAddAssetModal] = useState(false);
    const [showQuickActionModal, setShowQuickActionModal] = useState(false);
    const [showQRCodeModal, setShowQRCodeModal] = useState(false);

    const doQuickAction = () => {
        setShowQuickActionModal(true);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography weight="Bold" size={18}>Total Assets</Typography>
                    <Typography variant="secondary" size={14}>in Total</Typography>
                </View>
            ),
            headerRight: () => (
                <MenuPlusButton
                    onPress={() => setShowAddAssetModal(true)}
                />
            ),
        })
    }, []);

    return (
        <Wrapper>
            <SearchBox style={{ marginBottom: 16 }} />

            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <AssetItem key={index} onQuickAction={() => doQuickAction()} />
            ))}

            <AddAssetModal
                show={showAddAssetModal}
                onClose={() => setShowAddAssetModal(false)}
            />

            <AssetQuickActionModal
                show={showQuickActionModal}
                onClose={() => setShowQuickActionModal(false)}
                onNext={() => {
                    setShowQuickActionModal(false);
                    setShowQRCodeModal(true);
                }}
            />

            <AssetQRCodeModal
                show={showQRCodeModal}
                onClose={() => {
                    setShowQRCodeModal(false);
                    setShowQuickActionModal(true);
                }}
                onOk={() => {
                    setShowQRCodeModal(false);
                }}
            />
        </Wrapper>
    )
}

const Wrapper = styled.ScrollView`
    padding: 20px;
`;