import { useEffect, useState } from "react";
import { View, Text, Dimensions, useWindowDimensions } from "react-native";
// import { LineChart } from "react-native-chart-kit";
import { LineChart, AreaChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { getGraphData } from "../../../redux/actions/portfolioActions";
import Typography from "../../common/typography/Typography";
import { useTheme } from "@react-navigation/native";

const AssetValueChart = () => {

    const { width: screenWidth } = useWindowDimensions();
    const dispatch = useDispatch();
    const { dark } = useTheme();
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
    }, [graphData]);
    console.log(graphData)

    return (
        <Wrapper>
            {/* {chartData && <LineChart
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
            />} */}
            {chartData &&
                <AreaChart
                    width={screenWidth}
                    height={220}
                    data={graphData}
                    margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
                >
                    <defs>
                        <linearGradient id="colorGraph" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="50%" stopColor="#3e7eff" stopOpacity={0.1} />
                            <stop offset="95%" stopColor="#3e7eff" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <Area
                        type="monotone"
                        dataKey="y"
                        stroke="#008FFB"
                        strokeWidth={2}
                        fill="url(#colorGraph)"
                        fillOpacity={1}
                        activeDot={{ r: 8 }}
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
                    {/* <YAxis axisLine={false} /> */}
                    <Tooltip content={<TooltipContent />} />
                </AreaChart>
            }
        </Wrapper>
    )
};

const TooltipContent = ({ active, payload, label }: {
    active?: boolean,
    payload?: any,
    label?: string
}) => {
    const { dark } = useTheme();
    if (active && payload && payload.length) {
        return (
            <TootltipContainer dark={dark}>
                <Typography weight="Medium">£{payload[0].value}</Typography>
            </TootltipContainer>
        )
    }
    return null
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
const xt = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
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
    margin-left: -20px;
    margin-right: -20px;
`;

const TootltipContainer = styled.View`
    border: 1px solid;
    background-color: ${props => props.dark ? 'rgba(53, 57, 70, 0.25)' : '#FFF'};
    border-color: ${props => props.dark ? '#353946' : '#FFF'};
    padding: 15px 18px;
    border-radius: 10px;
`;

export default AssetValueChart;