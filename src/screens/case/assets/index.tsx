import { useEffect, useLayoutEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import AssetItem from '../../../components/cases/detail/AssetItem';
import AddAssetModal from '../../../components/cases/modal/AddAssetModal';
import AssetQRCodeModal from '../../../components/cases/modal/AssetQRCodeModal';
import AssetQuickActionModal from '../../../components/cases/modal/AssetQuickActionModal';
import MenuPlusButton from '../../../components/common/buttons/MenuPlusButton';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import SearchBox from '../../../components/common/input/SearchBox';
import Typography from '../../../components/common/typography/Typography';
import { getAssets } from '../../../redux/actions/assetActions';
import LoadingScreen from '../../common/LoadingScreen';

interface ITotalAssetsPage {
    route: any;
    navigation: any;
}

export default function TotalAssetsPage({ route, navigation }: ITotalAssetsPage) {

    const { portfolio } = route.params;

    const [showAddAssetModal, setShowAddAssetModal] = useState(false);
    const [showQuickActionModal, setShowQuickActionModal] = useState(false);
    const [showQRCodeModal, setShowQRCodeModal] = useState(false);
    const assets = useSelector((state: any) => state.assets.assets);
    const assets_loading: boolean = useSelector((state: any) => state.assets.loading);
    const dispatch = useDispatch();
    const [selectedAsset, setSelectedAsset] = useState<any>(undefined);

    useEffect(() => {
        // dispatch(getAssets(portfolio.id));
    }, [dispatch, portfolio]);
    console.log(assets)

    const doQuickAction = (asset: any) => {
        setSelectedAsset(asset);
        setShowQuickActionModal(true);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography weight="Bold" size={18}>Assets</Typography>
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
    console.log(assets)

    if (assets_loading)
        return <LoadingScreen />

    return (
        <Wrapper>
            <SearchBox style={{ marginBottom: 16 }} />

            {assets.map((ast: any, index: number) => (
                <AssetItem key={index} onQuickAction={() => doQuickAction(ast)} asset={ast} />
            ))}

            <OutlineButton text="View More" />

            <AddAssetModal
                portfolio={portfolio}
                show={showAddAssetModal}
                onClose={() => setShowAddAssetModal(false)}
            />

            {selectedAsset && <AssetQuickActionModal
                show={showQuickActionModal}
                asset={selectedAsset}
                onClose={() => setShowQuickActionModal(false)}
                onNext={() => {
                    setShowQuickActionModal(false);
                    setShowQRCodeModal(true);
                }}
            />}

            {selectedAsset && <AssetQRCodeModal
                show={showQRCodeModal}
                asset={selectedAsset}
                onClose={() => {
                    setShowQRCodeModal(false);
                    setShowQuickActionModal(true);
                }}
                onOk={() => {
                    setShowQRCodeModal(false);
                }}
            />}
        </Wrapper>
    )
}

const Wrapper = styled.ScrollView`
    padding: 20px;
`;