import { useEffect, useState } from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import styled from 'styled-components/native'
import BaseModal from "../../common/modal";
import ModalHeader from "../../common/modal/ModalHeader";
import ModalTitle from "../../common/modal/ModalTitle";
import IconBox from "../../common/svg/IconBox";
import Typography from "../../common/typography/Typography";

const coinList = [
    { name: 'Bitcoin', icon: 'bitcoin', symbol: 'BTC' },
    { name: 'Ethereum', icon: 'ethereum', symbol: 'ETH' },
    { name: 'Solana', icon: 'solana', symbol: 'SOL' },
    { name: 'Ripple', icon: 'ripple', symbol: 'XRP' },
    { name: 'Litecoin', icon: 'litecoin', symbol: 'LTC' },
    { name: 'Tether', icon: 'tether', symbol: 'USD' },
]

const WalletSelectModal = ({ show, onClose }) => {

    return (
        <BaseModal show={show}>
            <ModalHeader onClose={onClose}>
                <ModalTitle title="Select Wallet" />
            </ModalHeader>

            <Typography weight="SemiBold" style={{ marginBottom: 10, marginTop: 10 }}>Coin List</Typography>
            {coinList.map((coin, index) => (
                <CoinButton key={index}>
                    <CBWrapper>
                        <IconBox name={coin.icon} width={26} height={26} />
                        <Typography weight="Medium" style={{ marginLeft: 10 }}>{coin.name}</Typography>
                    </CBWrapper>
                    <Typography>{coin.symbol}</Typography>
                </CoinButton>
            ))}
        </BaseModal>
    )
};

const CoinButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
`;

const CBWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 5px;
`;

export default WalletSelectModal;