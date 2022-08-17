import { useEffect, useState } from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import styled from 'styled-components/native'
import BaseModal from "../../common/modal";
import ModalHeader from "../../common/modal/ModalHeader";
import IconBox from "../../common/svg/IconBox";
import Typography from "../../common/typography/Typography";

const WalletQRModal = ({ show, cryptoName = 'Bitcoin', cryptoAddress = '0xd0B1CEb15c7F...' }) => {

    const [visible, setVisible] = useState(show)

    useEffect(() => {
        setVisible(show);
    }, [show]);

    return (
        <BaseModal show={visible}>
            <ModalHeader>
                <Typography size={18}>Cold Wallet</Typography>
            </ModalHeader>

            <Wrapper>
                <QRCodeWrapper></QRCodeWrapper>

                <Typography size={18} style={{ textAlign: 'center' }}>{cryptoName}</Typography>
                <Typography style={{ color: '#8082A4', textAlign: 'center' }}>{cryptoAddress}</Typography>
            </Wrapper>
        </BaseModal>
    )
};

const Wrapper = styled.View`
    justify-content: center;
`;

const QRCodeWrapper = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #E8E9F3;
    padding: 20px;
`;

export default WalletQRModal;