import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
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
import MainContentWrapper from "../../../components/common/base/MainContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getTempWallets } from "../../../redux/actions/assetActions";
import { createNewOperation, getOperationsByOrg, selectOperation } from "../../../redux/actions/operationActions";
import { clearLoadedPortfolios } from "../../../redux/actions/portfolioActions";
import { getUserOrg } from "../../../redux/actions/authActions";

export default function CaseHome({ navigation }) {

    const [addCaseModalShow, setAddCaseModalShow] = useState(false);
    const [coldWalletModalShow, setColdWalletModalShow] = useState(false);
    const { dark } = useTheme();
    const auth = useSelector((state: any) => state.auth);
    const operations = useSelector((state: any) => state.operations.operations);
    const [statValues, setStatValues] = useState([0, 0, 0, 0]);
    const dispatch = useDispatch();
    // const tempWallets = useSelector((state: any) => state.assets.tempWallets);

    useEffect(() => {
        // dispatch(getTempWallets());
        dispatch(getOperationsByOrg(auth.org));
        // dispatch(clearLoadedPortfolios());
    }, [auth.org, dispatch]);

    // Calculate Statistics Numbers
    useEffect(() => {
        let data = [0, 0, 0, 0];
        for (var i = 0;i < operations.length;i++) {
            data[0] += operations[i].portfolio_count;
            data[1] += operations[i].asset_count;
        }
        data[3] = operations.length;
        setStatValues(data);
    }, [operations]);

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

    const onInspect = (operation: any) => {
        dispatch(selectOperation(operation, auth.role));
        navigation.navigate("Inspect", {
            operation_id: operation.operation_id
        })
    };

    const onAddCase = (case_name: string) => {
        setAddCaseModalShow(false)
        console.log(auth.org)
        dispatch(createNewOperation({
            name: case_name,
            organization_id: auth.org
        }))
    };

    return (
        <MainContentWrapper>
            <Div style={{ marginBottom: 15 }}>
                <TotalValueIconWrapper dark={dark}>
                    <MySVG.Wallet style={{ color: dark ? '#FFF' : '#23262F' }} width={23} height={23} />
                </TotalValueIconWrapper>

                <View style={{ marginLeft: 15 }}>
                    <Typography variant="secondary" size={12}>Total Value</Typography>
                    <Typography variant="currency" size={22} weight="SemiBold">£100,420.50</Typography>
                </View>
            </Div>

            {/* Statistics numbers */}
            <StatView portfolio={statValues[0]} assets={statValues[1]} terminated={statValues[2]} active={statValues[3]} />

            <View style={{ flexDirection: 'row' }}>
                <OutlineButton
                    text="Cold Wallet"
                    style={{ flexGrow: 1 }}
                    onPress={() => setColdWalletModalShow(true)}
                />
                <View style={{ flexGrow: 1 }} />
            </View>

            {/* List of cases */}
            {operations.reverse().map((operation: any, index: number) => (
                <CaseInfoPanel key={index} onInspect={onInspect} value={operation} />
            ))}

            <WalletSelectModal
                show={coldWalletModalShow}
                onClose={() => setColdWalletModalShow(false)}
            />

            <AddCaseModal
                show={addCaseModalShow}
                onClose={() => setAddCaseModalShow(false)}
                onOk={(name: string) => onAddCase(name)}
            />
        </MainContentWrapper>
    )
}

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
    border-color: ${(props: any) => props.dark ? '#353946' : '#F0F0FA'};
    background-color: ${(props: any) => props.dark ? 'rgba(53, 57, 70, 0.25)' : '#FFF'};
`;