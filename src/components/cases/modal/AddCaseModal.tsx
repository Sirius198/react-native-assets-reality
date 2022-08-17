import { useEffect, useState } from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import styled from 'styled-components/native'
// import PrimaryButton from "../../common/buttons/PrimaryButton";
import { Input } from "../../common/input/styles";
import BaseModal, { ModalActions } from "../../common/modal";
import ModalHeader from "../../common/modal/ModalHeader";
import { Divider, SecondaryButton, PrimaryButton } from "../../common/styles";
import IconBox from "../../common/svg/IconBox";
import Typography from "../../common/typography/Typography";

const AddCaseModal = ({ show }) => {

    const [visible, setVisible] = useState(show)

    useEffect(() => {
        setVisible(show);
    }, [show]);

    return (
        <BaseModal show={visible}>
            <ModalHeader showBackButton={false}>
                <Typography size={18}>Add Cases</Typography>
            </ModalHeader>

            <Wrapper>
                <Typography>Case Name</Typography>
                <Input placeholder="Case name" />

                <Typography>Portfolio</Typography>
                <AddPortfolioButtonWrapper>
                    <Typography style={{ textAlign: 'center' }}>+ Add Portfolio</Typography>
                </AddPortfolioButtonWrapper>
            </Wrapper>

            <Divider />

            <ModalActions>
                <SecondaryButton style={{ flex: 1 }}>
                    <Typography>Cancel</Typography>
                </SecondaryButton>
                <PrimaryButton style={{ flex: 1 }}>
                    <Typography style={{ color: 'white' }}>Done</Typography>
                </PrimaryButton>
            </ModalActions>
        </BaseModal>
    )
};

const Wrapper = styled.View`
`;

export const AddPortfolioButtonWrapper = styled.TouchableOpacity`
    background-color: rgba(45, 116, 255, 0.02);
    border: 1px dashed rgba(62, 126, 255, 0.5);
    padding: 10px;
    border-radius: 10px;
    justify-content: center;
    margin: 10px 0;
`;

export default AddCaseModal;