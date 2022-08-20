import { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CaseInfoPanel from "../../../components/cases/CaseInfoPanel";
import WalletSelectModal from "../../../components/cases/modal/WalletSelectModal";
import StatView from "../../../components/cases/StatView";
import Typography from "../../../components/common/typography/Typography";
import styled from 'styled-components/native'
import MenuPlusButton from "../../../components/common/buttons/MenuPlusButton";
import MySVG from "../../../components/common/svg";
import { useTheme } from "@react-navigation/native";
import OutlineButton from "../../../components/common/buttons/OutlineButton";
import AddCaseModal from "../../../components/cases/modal/AddCaseModal";
import TestSvg from "../../../components/common/svg/AllSvg";

export default function CaseHome({ navigation }) {

    const [addCaseModalShow, setAddCaseModalShow] = useState(false);
    const [coldWalletModalShow, setColdWalletModalShow] = useState(false);
    const { dark } = useTheme();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography weight="Bold" size={18}>Cases</Typography>
                </View>
            ),
            headerRight: () => (
                <MenuPlusButton
                    onPress={() => setAddCaseModalShow(true)}
                />
            ),
        })
    }, []);

    const onInspect = (case_id) => {
        navigation.navigate("Inspect")
    };

    const onAddCase = (case_name) => {
        setAddCaseModalShow(false)
        console.log(case_name)
    };

    return (
        <Wrapper>
            <Div style={{ marginBottom: 15 }}>
                <TotalValueIconWrapper dark={dark}>
                    {/* <TestSvg style={{ color: dark ? '#FFF' : '#23262F' }} /> */}
                    {/* <MySVG.Trash style={{ color: dark ? '#FFF' : '#23262F' }} /> */}
                </TotalValueIconWrapper>

                <View style={{ marginLeft: 15 }}>
                    <Typography variant="secondary" size={12}>Total Value</Typography>
                    <Typography variant="currency" size={22} weight="SemiBold">£100,420.50</Typography>
                </View>
            </Div>

            {/* Statistics numbers */}
            <StatView portfolio={79} assets={32} terminated={2} active={12} />

            <View style={{ flexDirection: 'row' }}>
                <OutlineButton
                    text="Cold Wallet"
                    style={{ flexGrow: 1 }}
                    onPress={() => setColdWalletModalShow(true)}
                />
                <View style={{ flexGrow: 1 }} />
            </View>

            {/* List of cases */}
            {[1, 2, 3, 4, 5].map((_, index) => (
                <CaseInfoPanel key={index} onInspect={onInspect} />
            ))}

            <WalletSelectModal
                show={coldWalletModalShow}
                onClose={() => setColdWalletModalShow(false)}
            />

            <AddCaseModal
                show={addCaseModalShow}
                onClose={() => setAddCaseModalShow(false)}
                onOk={(name) => onAddCase(name)}
            />
        </Wrapper>
    )
}

const Wrapper = styled.ScrollView`
    padding: 20px;
`;

const Div = styled.View`
    flex-direction: row;
    align-items: center;
`;

const TotalValueIconWrapper = styled.View`
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 10px;
    border-color: ${props => props.dark ? '#353946' : '#F0F0FA'};
    background-color: ${props => props.dark ? 'rgba(53, 57, 70, 0.25)' : '#FFF'};
`;