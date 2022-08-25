import { useEffect, useState } from "react";
import { View, Text, Dimensions, useWindowDimensions } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
// import { LineChart, Line } from 'recharts';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { getGraphData } from "../../../redux/actions/portfolioActions";

const AssetValueChart = () => {

    const { width: screenWidth } = useWindowDimensions();
    const dispatch = useDispatch();
    const graphData = useSelector((state: any) => state.operations.graphData);
    const [chartData, setChartData] = useState<any>(undefined);

    useEffect(() => {
        const data = [
            {
                "asset": "BTC",
                "initialTimestamp": "2022-07-30 14:36:31.279991+08",
                "amount": 10
            },
            {
                "asset": "ETH",
                "initialTimestamp": "2022-07-27 14:36:31.279991+08",
                "amount": 10
            }
        ];

        dispatch(getGraphData(data));
    }, []);

    useEffect(() => {
        let labels = [];
        let yValue = [];
        for (var i = 0; i < graphData.length; i++) {
            labels.push(graphData[i].x);
            yValue.push(graphData[i].y);
        }

        setChartData({
            labels,
            datasets: [
                {
                    data: yValue,
                    color: () => `#008FFB`, // optional
                    strokeWidth: 2,
                    withDots: false,
                    withScrollableDot: false
                },
            ],
        })
        console.log(labels.length, yValue.length)
    }, [graphData]);

    return (
        <Wrapper>
            {chartData && <LineChart
                data={chartData}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                withVerticalLines={false}
                withVerticalLabels={true}
                withHorizontalLabels={false}
                // bezier={true}
                segments={8}
                style={{
                    paddingLeft: 0,
                    width: '100%'
                }}
            />}
        </Wrapper>
    )
};

const chartConfig = {
    // backgroundGradientFrom: "rgba(0,0,0,0)",
    backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: "rgba(0,0,0,0)",
    backgroundGradientToOpacity: 0,
    // color: (opacity = 1) => `rgba(0, 143, 251, ${opacity})`,
    color: (opacity = 1) => `rgba(62, 126, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.1,
    useShadowColorFromDataset: false // optional
};

const data = {
    labels: ["12:51 AM", "5:01 AM", "9:12 AM", "1:22 PM"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43, 20, 45, 180, 80, 99, 43, 120, 45, 28, 80, 99, 43,],
            color: () => `#008FFB`, // optional
            strokeWidth: 2,
            withDots: false,
            withScrollableDot: false
        },
    ],
    // legend: ["Rainy Days"] // optional
};

const Wrapper = styled.View`
    // margin-left: -60px;
    // margin-right: -20px;
`;

export default AssetValueChart;