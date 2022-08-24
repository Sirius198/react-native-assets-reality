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
// import Dropdown from "../../common/dropdown";
import { CoinList } from "../../../constants/FilteredData";
import { createAsset } from "../../../redux/actions/assetActions";
import { useDispatch, useSelector } from "react-redux";

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

export default function AddAssetModal({ show, onClose, portfolio }) {

    const [assetType, setAssetType] = useState(0);
    const [addressType, setAddressType] = useState(0);
    const [walletType, setWalletType] = useState(0);
    const { dark } = useTheme();
    const dispatch = useDispatch();
    const auth = useSelector((state: any) => state.auth);

    const [custodianOpen, setCustodianOpen] = useState(false);
    const [custodianValue, setCustodianValue] = useState(null);
    const [custodianItems, setCustodianItems] = useState([
        { label: 'Digivault', value: 'digivault' },
        { label: 'Other', value: 'other' }
    ]);

    const [cryptoDropdownOpen, setCryptoDropdownOpen] = useState(false);
    const [cryptoValue, setCryptoValue] = useState(null);
    const [cryptoList, setCryptoList] = useState<any[]>([]);

    useEffect(() => {
        let list = [];
        for (var i = 0; i < CoinList.length; i++) {
            list.push({ label: CoinList[i], value: CoinList[i] });
        }
        setCryptoList(list);
    }, []);

    useEffect(() => {
        setAssetType(0);
        setAddressType(0);
        setWalletType(0);
    }, [show]);

    const onCreateAsset = () => {
        onClose();
        console.log(cryptoValue, custodianValue, assetType, walletType, addressType);

        const data: any = {
            fields: {
                name: "test",
                organisation_id: auth.org,
                portfolio_id: portfolio.id,
                operation_id: portfolio.operation_id,
                asset_type: cryptoValue,
                wallet_type: "Warm",
                existing_address: "",
                custodian: custodianValue,
                is_airtable: true,
                already_exists: false,
            },
        };

        dispatch(createAsset(data.fields));
    };

    return (
        <BaseModal show={show}>
            <ModalHeader onClose={onClose} showBackButton={false}>
                <ModalTitle title="Add Asset" />
            </ModalHeader>

            <ScrollViewWrapper showsVerticalScrollIndicator={false}>

                {/* <View>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View> */}

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

                {walletType != 0 && <>
                    <Typography weight="Medium" style={{ marginTop: 24 }}>Pick Custodian</Typography>
                    <Typography variant="secondary" size={12} weight="Light" style={{ marginBottom: 15 }}>You can edit it anytime</Typography>

                    <DropdownWrapper>
                        <Typography weight="Medium" mb={10}>Custodian</Typography>

                        <DropDownPicker
                            open={custodianOpen}
                            value={custodianValue}
                            items={custodianItems}
                            setOpen={setCustodianOpen}
                            setValue={setCustodianValue}
                            setItems={setCustodianItems}
                        />
                    </DropdownWrapper>

                    {/* <Dropdown /> */}

                    {/* Asset */}
                    <Typography weight="Medium" style={{ marginTop: 24 }}>Select Asset</Typography>
                    <Typography variant="secondary" size={12} weight="Light" style={{ marginBottom: 15 }}>Pick Asset you want to store</Typography>

                    <DropdownWrapper style={{ marginBottom: 15 }}>
                        <Typography weight="Medium" mb={10}>Cryptocurrency</Typography>

                        {/* <Dropdown /> */}
                        <DropDownPicker
                            open={cryptoDropdownOpen}
                            value={cryptoValue}
                            items={cryptoList}
                            setOpen={setCryptoDropdownOpen}
                            setValue={setCryptoValue}
                            setItems={setCryptoList}
                        />
                    </DropdownWrapper>
                </>}

            </ScrollViewWrapper>

            <ModalDefaultActions
                onCancel={onClose}
                OkButtonText="Done"
                onOk={onCreateAsset}
            />
        </BaseModal>
    )
}

const ScrollViewWrapper = styled.ScrollView`
    max-height: 500px;
`;

const DropdownWrapper = styled.View`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #888;
`;

// const MyDD = styled(ModalDropdown)`
//     // padding: 11px 20px;
//     border: 1px solid;
//     border-color: ${props => props.dark ? '#353946' : '#E7E8EF'};
//     background-color: ${props => props.dark ? 'rgba(53, 57, 70, 0.25)' : 'rgba(45, 116, 255, 0.02)'};
//     border-radius: 8px;

// `;