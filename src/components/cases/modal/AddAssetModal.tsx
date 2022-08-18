import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import RadioCard from "../../common/base/RadioCard";
import BaseModal from "../../common/modal";
import ModalDefaultActions from "../../common/modal/ModalDefaultActions";
import ModalHeader from "../../common/modal/ModalHeader";
import ModalTitle from "../../common/modal/ModalTitle";
import MySVG from "../../common/svg";
import Typography from "../../common/typography/Typography";

export default function AddAssetModal({ show, onClose }) {

    const [assetType, setAssetType] = useState(0);
    const [addressType, setAddressType] = useState(0);
    const [walletType, setWalletType] = useState(0);

    return (
        <BaseModal show={show}>
            <ModalHeader onClose={onClose}>
                <ModalTitle title="Add Asset" />
            </ModalHeader>

            <ScrollView style={{ height: 200, flex: 1 }}>

                {/* Asset Type */}
                <Typography weight="Medium">Select Asset Type</Typography>
                <Typography variant="secondary" size={12} weight="Light" style={{ marginBottom: 8 }}>Pick the asset you want track</Typography>

                <RadioCard
                    active={assetType === 1}
                    title="Cryptocurrency"
                    subtitle="Generate a warm or cold wallet wlth out partner custodians"
                    icon={<MySVG.Location style={{ color: assetType === 1 ? '#FFF' : '#3E7EFF' }} />}
                    onPress={() => setAssetType(1)}
                />

                <RadioCard
                    active={assetType === 2}
                    title="Other"
                    subtitle="Add other forms of non - digital assets"
                    icon={<MySVG.Location style={{ color: assetType === 2 ? '#FFF' : '#3E7EFF' }} />}
                    onPress={() => setAssetType(2)}
                />

                {/* Address Type */}
                <Typography weight="Medium" style={{ marginTop: 16 }}>Select Address Type</Typography>
                <Typography variant="secondary" size={12} weight="Light" style={{ marginBottom: 8 }}>Pick the Address you want to configure</Typography>

                <RadioCard
                    active={addressType === 1}
                    title="Generate"
                    subtitle="Generate a warm wallet instantly. Fast and easy to use"
                    icon={<MySVG.Location style={{ color: addressType === 1 ? '#FFF' : '#3E7EFF' }} />}
                    onPress={() => setAddressType(1)}
                />

                <RadioCard
                    active={addressType === 2}
                    title="Add Existing Address"
                    subtitle="Add an existing address that holds the tokens you are trying to track"
                    icon={<MySVG.Location style={{ color: addressType === 2 ? '#FFF' : '#3E7EFF' }} />}
                    onPress={() => setAddressType(2)}
                />

                {/* Wallet Type */}
                <Typography weight="Medium" style={{ marginTop: 16 }}>Select Address Type</Typography>
                <Typography variant="secondary" size={12} weight="Light" style={{ marginBottom: 8 }}>Pick the Address you want to configure</Typography>

                <RadioCard
                    active={walletType === 1}
                    title="Generate"
                    subtitle="Generate a warm wallet instantly. Fast and easy to use"
                    icon={<MySVG.Location style={{ color: walletType === 1 ? '#FFF' : '#3E7EFF' }} />}
                    onPress={() => setWalletType(1)}
                />

                <RadioCard
                    active={walletType === 2}
                    title="Add Existing Address"
                    subtitle="Add an existing address that holds the tokens you are trying to track"
                    icon={<MySVG.Location style={{ color: walletType === 2 ? '#FFF' : '#3E7EFF' }} />}
                    onPress={() => setWalletType(2)}
                />
            </ScrollView>

            <ModalDefaultActions />
        </BaseModal>
    )
}