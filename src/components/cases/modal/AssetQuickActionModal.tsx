import BaseModal from "../../common/modal";
import ModalHeader from "../../common/modal/ModalHeader";
import styled from 'styled-components/native'
import MySVG from "../../common/svg";
import { Image, View } from "react-native";
import Typography from "../../common/typography/Typography";
import ModalTitle from "../../common/modal/ModalTitle";
import Divider from "../../common/divider";
import RadioCard from "../../common/base/RadioCard";
import IconWrapper from "../../common/base/IconWrapper";
import ModalDefaultActions from "../../common/modal/ModalDefaultActions";
import { useEffect, useState } from "react";

interface IAssetQuickActionModal {
    show: boolean;
    onClose: any;
    onNext: any;
    asset: any;
}

export default function AssetQuickActionModal({ show, onClose, onNext, asset }: IAssetQuickActionModal) {

    const [actionType, setActionType] = useState(-1);

    useEffect(() => {
        setActionType(-1)
    }, [show])

    return (
        <BaseModal show={show}>
            <ModalHeader onClose={onClose} showBackButton={false}>
                <TitleBar>
                    {/* <MySVG.Bitcoin width={40} height={40} /> */}
                    <Image
                        source={{ uri: "https://xk8s6gfm71.execute-api.eu-west-2.amazonaws.com/Prod/?style=color&size=40&currency=" + asset.asset_type.toLowerCase() }}
                        style={{ width: 40, height: 40 }}
                    />
                    <View style={{ marginLeft: 15 }}>
                        <ModalTitle title={asset.asset_type} weight="Bold" />
                        <Typography variant="secondary">{asset.asset_type}</Typography>
                    </View>
                </TitleBar>
            </ModalHeader>

            <Typography weight="Light" size={12} variant="secondary" mb={8}>Total</Typography>
            <Typography weight="Medium">{asset.value}</Typography>

            <Divider />

            <Typography weight="Medium" mb={8}>Quick Action</Typography>
            <Typography weight="Light" size={12} variant="secondary" mb={15}>Please make your selection</Typography>

            <RadioCard
                active={actionType === 0}
                title="Withdraw"
                subtitle="Lorem Ipsum is simply text the printing."
                icon={<MySVG.Withdrawal style={{ color: actionType === 0 ? '#FFF' : '#3E7EFF' }} />}
            // onPress={() => setActionType(0)}
            />

            <RadioCard
                active={actionType === 1}
                title="Deposit"
                subtitle="Lorem Ipsum is simply text the printing."
                icon={<MySVG.DollarCircle style={{ color: actionType === 1 ? '#FFF' : '#3E7EFF' }} />}
                onPress={() => asset.wallet_address == "" && setActionType(1)}
            />

            <ModalDefaultActions
                onCancel={onClose}
                onOk={() => {
                    actionType != -1 && onNext()
                }}
                OkButtonText="Next"
            />
        </BaseModal>
    )
}

const TitleBar = styled.View`
    flex-direction: row;
    align-items: center;
`;

const ActionCard = styled(RadioCard)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;