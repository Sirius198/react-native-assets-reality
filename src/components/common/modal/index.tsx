import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import styled from 'styled-components/native'

const BaseModal = ({ show, children, ...rest }) => {

    const [visible, setVisible] = useState<boolean>(show);
    const { colors } = useTheme();

    useEffect(() => {
        setVisible(show)
    }, [show]);

    return (
        <Modal visible={visible} transparent {...rest}>
            <ModalContent onPress={() => {
                setVisible(false)
            }}>
                <ModalBody style={{ backgroundColor: colors.card }}>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
};

const ModalContent = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.3);
    // flex-direction: column;
    justify-content: flex-end;
`;

const ModalBody = styled.View`
    padding: 24px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const ModalActions = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export default BaseModal;