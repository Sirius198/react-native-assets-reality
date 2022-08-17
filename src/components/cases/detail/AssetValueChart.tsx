import { View, Text } from "react-native";
import { Dimensions } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const AssetValueChart = () => {

    const screenWidth = Dimensions.get("window").width;

    return (
        <View>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    )
};

const chartConfig = {
    // backgroundGradientFrom: "rgba(0,0,0,0)",
    backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: "rgba(0,0,0,0)",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 143, 251, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const data = {
    labels: ["12:51 AM", "5:01 AM", "9:12 AM", "1:22 PM"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43, 20, 45, 180, 80, 99, 43, 120, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(0, 143, 251, ${opacity})`, // optional
            strokeWidth: 2,
            withDots: false,
            withScrollableDot: false
        }
    ],
    // legend: ["Rainy Days"] // optional
};

export default AssetValueChart;