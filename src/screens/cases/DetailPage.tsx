import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native'
import PortfolioButtons from '../../components/cases/detail/PortfolioButtons';
import Typography from '../../components/common/typography/Typography';
import { Dimensions } from 'react-native';

// import { Picker } from '@react-native-picker/picker';
// import {
//     LineChart,
//     BarChart,
//     PieChart,
//     ProgressChart,
//     ContributionGraph,
//     StackedBarChart
// } from "react-native-chart-kit";
import PortfolioStat from '../../components/cases/detail/PortfolioStat';
import SearchBox from '../../components/common/input/SearchBox';
import AssetItem from '../../components/cases/detail/AssetItem';
import ActivityItem from '../../components/cases/detail/ActivityItem';
import PageHeader from '../../components/common/header';
import AssetValueChart from '../../components/cases/detail/AssetValueChart';
import { OutlineButton } from '../../components/common/styles';

const DetailPage = ({ onBack }) => {

    const [activePortfolio, setActivePortfolio] = useState(0);

    return (
        <ScrollView style={{ margin: 20 }}>
            <PageHeader
                onGoBack={onBack}
                title={
                    <View style={{ flexDirection: 'row' }}>
                        <Typography variant="secondary" size={18}>Cases</Typography>
                        <Typography size={18}> / Klondike</Typography>
                    </View>
                }
            />
            <PortfolioButtons activeId={activePortfolio} onChange={i => setActivePortfolio(i)} />

            {/* Total Assets and Recent Activity Buttons */}
            <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
                <OutlineButton style={{ flex: 1, margin: 10 }}>
                    <Typography align="center" style={{ color: '#3e7eff' }}>Total Assets</Typography>
                </OutlineButton>

                <OutlineButton style={{ flex: 1, margin: 10 }}>
                    <Typography align="center" style={{ color: '#3e7eff' }}>Recent Activity</Typography>
                </OutlineButton>
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
                        <Text>Choose</Text>
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

            {/* Total Assets List */}
            <Typography size={18}>Total Assets</Typography>
            <Typography variant='secondary'>In Total</Typography>

            <SearchBox />
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <AssetItem key={index} />
            ))}

            {/* Total Assets List */}
            <Typography size={18}>Recent Activity</Typography>
            <Typography variant='secondary'>In Total</Typography>

            <SearchBox />
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <ActivityItem key={index} />
            ))}

        </ScrollView >
    )
};

const data1 = [
    { x: -2, y: 1 },
    { x: -1, y: 0 },
    { x: 8, y: 13 },
    { x: 9, y: 11.5 },
    { x: 10, y: 12 }
]

const data2 = [
    { x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 1, y: 7 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 }
]
export default DetailPage;