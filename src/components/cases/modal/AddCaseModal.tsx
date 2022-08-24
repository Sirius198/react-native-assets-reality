import { useEffect, useState } from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import styled from 'styled-components/native'
import Divider from "../../common/divider";
import FormInput from "../../common/form/FormInput";
import FormLabel from "../../common/form/FormLabel";
// import PrimaryButton from "../../common/buttons/PrimaryButton";
import { Input } from "../../common/input/styles";
import BaseModal, { ModalActions } from "../../common/modal";
import ModalDefaultActions from "../../common/modal/ModalDefaultActions";
import ModalHeader from "../../common/modal/ModalHeader";
import ModalTitle from "../../common/modal/ModalTitle";

interface IAddCaseModal {
    show: boolean;
    onClose: Function;
    onOk: Function;
}

const AddCaseModal = ({ show, onClose, onOk }: IAddCaseModal) => {

    const [visible, setVisible] = useState(show)
    const [caseName, setCaseName] = useState('')

    useEffect(() => {
        setVisible(show);
    }, [show]);

    return (
        <BaseModal show={visible}>
            <ModalHeader showBackButton={false} onClose={onClose}>
                <ModalTitle title="Add Case" />
            </ModalHeader>

            <Wrapper>
                <FormLabel>Case Name</FormLabel>
                <FormInput
                    placeholder="Case name"
                    value={caseName}
                    onChangeText={setCaseName}
                />

                {/* <Typography>Portfolio</Typography>
                <AddPortfolioButtonWrapper>
                    <Typography style={{ textAlign: 'center' }}>+ Add Portfolio</Typography>
                </AddPortfolioButtonWrapper> */}
            </Wrapper>

            <Divider />

            <ModalDefaultActions
                OkButtonText="Done"
                onOk={() => onOk(caseName)}
                onCancel={onClose}
            />
        </BaseModal>
    )
};

const Wrapper = styled.View`
`;

export default AddCaseModal;