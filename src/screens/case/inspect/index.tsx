import { useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native'
import AssetValueChart from '../../../components/cases/detail/AssetValueChart';
import PortfolioButtons from '../../../components/cases/detail/PortfolioButtons';
import PortfolioStat from '../../../components/cases/detail/PortfolioStat';
import AddPortfolioModal from '../../../components/cases/modal/AddPortfolioModal';
import MainContentWrapper from '../../../components/common/base/MainContentWrapper';
import HeaderButton from '../../../components/common/buttons/HeaderButton';
import MenuPlusButton from '../../../components/common/buttons/MenuPlusButton';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import Typography from '../../../components/common/typography/Typography';

const CaseInspectPage = ({ navigation }) => {

    const [activePortfolio, setActivePortfolio] = useState(0);
    const [addPortfolioModalShow, setAddPortfolioModalShow] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View style={{ flexDirection: 'row' }}>
                    <Typography weight="Bold" size={18} style={{ color: '#8A8B9D' }}>Cases</Typography>
                    <Typography weight="Bold" size={18}> / Klondike</Typography>
                </View>
            ),
            headerRight: () => (
                <MenuPlusButton
                    onPress={() => setAddPortfolioModalShow(true)}
                />
            ),
        })
    }, []);

    return (
        <MainContentWrapper>
            <PortfolioButtons activeId={activePortfolio} onChange={i => setActivePortfolio(i)} />

            {/* Total Assets and Recent Activity Buttons */}
            <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20, justifyContent: 'space-between' }}>
                <OutlineButton
                    text="Total Assets"
                    style={{ marginRight: 16, flex: 1 }}
                    onPress={() => navigation.navigate('Assets')}
                />
                <OutlineButton
                    text="Recent Activity"
                    style={{ flex: 1 }}
                    onPress={() => navigation.navigate('Activity')}
                />
            </View>

            {/* Asset Total value */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 20 }}>
                <View>
                    <Typography
                        variant='secondary'
                        size={12}
                    >
                        Total asset value / Portfolio {activePortfolio + 1}
                    </Typography>
                    <Typography variant='primary' size={16} weight="Bold">
                        £36,581.70
                    </Typography>
                </View>

                <View>
                    <View>
                        {/* <Text>Choose</Text> */}
                        {/* <Picker
                selectedValue={"share"}
                // onValueChange={}
                mode="dropdown">
                <Picker.Item label="Add Note" value="addnote" />
                <Picker.Item label="Share1" value="share" />
                <Picker.Item label="Vault" value="vault" />
            </Picker> */}
                    </View>
                </View>
            </View>

            {/* Chart */}
            <AssetValueChart />

            {/* Portfolio Statistics */}
            <PortfolioStat />

            <AddPortfolioModal
                show={addPortfolioModalShow}
                onClose={() => setAddPortfolioModalShow(false)}
             />

            <View style={{ marginBottom: 40 }} />
        </MainContentWrapper>
    )
};

export default CaseInspectPage