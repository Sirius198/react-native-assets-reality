import BaseModal from "../../common/modal";
import ModalHeader from "../../common/modal/ModalHeader";
import styled from 'styled-components/native'
import MySVG from "../../common/svg";
import { View } from "react-native";
import Typography from "../../common/typography/Typography";
import ModalTitle from "../../common/modal/ModalTitle";
import Divider from "../../common/divider";
import RadioCard from "../../common/base/RadioCard";
import IconWrapper from "../../common/base/IconWrapper";
import ModalDefaultActions from "../../common/modal/ModalDefaultActions";

export default function AssetQuickActionModal({ show, onClose }) {
    return (
        <BaseModal show={show}>
            <ModalHeader onClose={onClose} showBackButton={false}>
                <TitleBar>
                    <MySVG.Bitcoin width={40} height={40} />
                    <View style={{ marginLeft: 15 }}>
                        <ModalTitle title="BTC" />
                        <Typography variant="secondary">Bitcoin</Typography>
                    </View>
                </TitleBar>
            </ModalHeader>

            <Typography weight="Light" size={12} variant="secondary">Total</Typography>
            <Typography weight="Medium">0.244</Typography>

            <Divider />

            <Typography weight="Medium">Quick Action</Typography>
            <Typography weight="Light" size={12} variant="secondary">Please make your selection</Typography>

            <ActionCard style={{ marginTop: 15 }}>
                <View style={{ maxWidth: '60%' }}>
                    <Typography weight="SemiBold">Withdraw</Typography>
                    <Typography size={12} variant="secondary">Lorem Ipsum is simply text the printing.</Typography>
                </View>

                <IconWrapper type={2} radius={50}>
                    <MySVG.Withdrawal style={{ color: '#3E7EFF' }} />
                </IconWrapper>
            </ActionCard>

            <ActionCard>
                <View>
                    <Typography weight="SemiBold">Deposit</Typography>
                    <Typography size={12} variant="secondary">Lorem Ipsum is simply text the printing.</Typography>
                </View>

                <IconWrapper type={2} radius={50}>
                    <MySVG.DollarCircle style={{ color: '#3E7EFF' }} />
                </IconWrapper>
            </ActionCard>

            <ModalDefaultActions
                onCancel={onClose}
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