import { useEffect, useRef, useState } from "react";
// import ModalDropdown from 'react-native-modal-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioCard from "../../common/base/RadioCard";
import BaseModal from "../../common/modal";
import ModalDefaultActions from "../../common/modal/ModalDefaultActions";
import ModalHeader from "../../common/modal/ModalHeader";
import ModalTitle from "../../common/modal/ModalTitle";
import MySVG from "../../common/svg";
import Typography from "../../common/typography/Typography";
import styled from 'styled-components/native';
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Dropdown from "../../common/dropdown";

const DummyCustodians = [
    {
        icon: '',
        name: 'DIGIVAULT'
    },
    {
        icon: '',
        name: 'FIDELITY'
    },
];

export default function AddAssetModal({ show, onClose }) {

    const [assetType, setAssetType] = useState(0);
    const [addressType, setAddressType] = useState(0);
    const [walletType, setWalletType] = useState(0);
    const [custodian, setCustodian] = useState(0);
    const { dark } = useTheme();


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    useEffect(() => {
        setAssetType(0);
        setAddressType(0);
        setWalletType(0);
    }, [show]);

    return (
        <BaseModal show={show}>
            <ModalHeader onClose={onClose} showBackButton={false}>
                <ModalTitle title="Add Asset" />
            </ModalHeader>

            {/* <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                /> */}

            <ScrollViewWrapper showsVerticalScrollIndicator={false}>

                <View>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                </View>

                {/* Asset Type */}
                <Typography weight="Medium">Select Asset Type</Typography>
                <Typography variant="secondary" size={12} weight="Light" style={{ marginBottom: 8 }}>Pick the asset you want track</Typography>

                <RadioCard
                    active={assetType === 1}
                    title="Cryptocurrency"
                    subtitle="Generate a warm or cold wallet wlth out partner custodians"
                    icon={<MySVG.Wallet style={{ color: assetType === 1 ? '#FFF' : '#3E7EFF' }} />}
                    onPress={() => setAssetType(1)}
                />

                <RadioCard
                    active={assetType === 2}
                    title="Other"
                    subtitle="Add other forms of non - digital assets"
                    icon={<MySVG.Invoice style={{ color: assetType === 2 ? '#FFF' : '#3E7EFF' }} />}
                // onPress={() => setAssetType(2)}
                />

                {/* Address Type */}
                {assetType != 0 &&
                    <>
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
                        // onPress={() => setAddressType(2)}
                        />
                    </>}

                {/* Wallet Type */}
                {addressType != 0 &&
                    <>
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
                        // onPress={() => setWalletType(2)}
                        />
                    </>
                }

                {/* Custodian */}
                {walletType != 0 && <>
                    <Typography weight="Medium" style={{ marginTop: 24 }}>Select Custodian</Typography>
                    <Typography variant="secondary" size={12} weight="Light" style={{ marginBottom: 15 }}>Pick Custodian you want to store the asset with</Typography>

                    <Dropdown />

                    {/* Custodian */}
                    <Typography weight="Medium" style={{ marginTop: 24 }}>Select Asset</Typography>
                    <Typography variant="secondary" size={12} weight="Light" style={{ marginBottom: 15 }}>Pick Asset you want to store</Typography>

                    <Dropdown />
                </>}

            </ScrollViewWrapper>

            <ModalDefaultActions
                onCancel={onClose}
                OkButtonText="Done"
            />
        </BaseModal>
    )
}

const ScrollViewWrapper = styled.ScrollView`
    max-height: 500px;
`;

// const MyDD = styled(ModalDropdown)`
//     // padding: 11px 20px;
//     border: 1px solid;
//     border-color: ${props => props.dark ? '#353946' : '#E7E8EF'};
//     background-color: ${props => props.dark ? 'rgba(53, 57, 70, 0.25)' : 'rgba(45, 116, 255, 0.02)'};
//     border-radius: 8px;

// `;