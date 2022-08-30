import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native'
import IconBox from "../components/common/svg/IconBox";
import MySVG from "../components/common/svg";

interface IMainTabBar {
    navInfo: any;
}

const MainTabBar = ({ navInfo }: IMainTabBar) => {

    const [activeNavId, setActiveIndex] = useState(0);
    const { dark, colors } = useTheme();

    useEffect(() => {
        navInfo.navigation.navigate(navInfo.state.routes[activeNavId].name);
    }, [activeNavId]);

    return (
        <Wrapper style={{ backgroundColor: colors.card, borderColor: colors.border }}>
            {navInfo.state.routes.map((nav: any, index: number) => (
                <TabButton key={index} onPress={() => setActiveIndex(index)} isActive={activeNavId === index}>
                    <LinearGradient
                        colors={activeNavId == index ? ['rgba(62,126,255,0.08)', 'transparent'] : [colors.card, colors.card]}
                        style={{
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {index === 0 && (activeNavId == 0 ? <MySVG.NavCase2 /> : <MySVG.NavCase style={{ color: '#B0B1BC' }} />)}
                        {/* {index === 1 && (activeNavId == 1 ? <MySVG.NavClient2 /> : <MySVG.NavClient />)} */}
                        {/* {index === 2 && (activeNavId == 2 ? <MySVG.NavActivity2 /> : <MySVG.NavActivity />)} */}
                        {index === 1 && (activeNavId == 1 ? <MySVG.NavSetting2 /> : <MySVG.NavSetting />)}
                        {index === 2 && (activeNavId == 2 ? <MySVG.NavProfile2 /> : <MySVG.NavProfile />)}
                        {/* {index === 3 && <MySVG.NavActivity />} */}
                    </LinearGradient>
                </TabButton>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.View`
    padding: 0 20px;
    flex-direction: row;
    border-top-width: 1px;
    justify-content: space-around;
`;

const TabButton = styled.TouchableOpacity<{ isActive: boolean }>`
    height: 50px;
    width: 50px;
    // align-items: center;
    // justify-content: center;
    border-top-color: #3e7eff;
    border-top-width: ${props => props.isActive ? '3px' : '0px'};
`;

export default MainTabBar;