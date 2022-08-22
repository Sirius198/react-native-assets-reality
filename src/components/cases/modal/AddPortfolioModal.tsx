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
import { SecondaryButton, PrimaryButton } from "../../common/styles";
import MySVG from "../../common/svg";
import IconBox from "../../common/svg/IconBox";
import Typography from "../../common/typography/Typography";

const AddPortfolioModal = ({ show, onClose }) => {

    const [visible, setVisible] = useState(show)

    useEffect(() => {
        setVisible(show);
    }, [show]);

    return (
        <BaseModal show={visible}>
            <ModalHeader onClose={onClose}>
                <ModalTitle title="Add Portfolio" />
            </ModalHeader>

            <Wrapper>
                <FormLabel>Portfolio name</FormLabel>
                <FormInput placeholder="Portfolio name" />
                {/* <Typography style={{ marginTop: 10, marginBottom: 10 }}>Case Name</Typography> */}
                {/* <Input placeholder="Case name" /> */}

                <Typography style={{ marginTop: 10, marginBottom: 10 }}>Portfolio</Typography>
                {[1, 2].map((_, index) => (
                    <PortfolioWrapper key={index}>
                        <View>
                            <Typography variant="secondary" size={12}>Case name</Typography>
                            <Typography variant="primary" size={12}>Suspect name #{index + 1}</Typography>
                        </View>
                        <MySVG.BadgeTick />
                    </PortfolioWrapper>
                ))}

                <Typography>Portfolio</Typography>
                <AddPortfolioButtonWrapper>
                    <Typography align="center" weight="Medium" size={12} style={{ color: '#3E7EFF' }}>+ Add Portfolio</Typography>
                </AddPortfolioButtonWrapper>
            </Wrapper>

            <Divider />

            <ModalDefaultActions
                OkButtonText="Done"
            />

            {/* <ModalActions>
                <SecondaryButton style={{ flex: 1 }}>
                    <Typography>Cancel</Typography>
                </SecondaryButton>
                <PrimaryButton style={{ flex: 1 }}>
                    <Typography style={{ color: 'white' }}>Done</Typography>
                </PrimaryButton>
            </ModalActions> */}
        </BaseModal>
    )
};

const Wrapper = styled.View`
`;

const PortfolioWrapper = styled.View`
    padding: 10px;
    background-color: rgba(45, 116, 255, 0.05);
    border: 1px solid rgba(62, 126, 255, 0.3);
    border-radius: 10px;
    flex-direction: row;
    margin-bottom: 15px;
    align-items: center;
    justify-content: space-between;
`;

const AddPortfolioButtonWrapper = styled.TouchableOpacity`
    background-color: rgba(45, 116, 255, 0.02);
    border: 1px dashed rgba(62, 126, 255, 0.5);
    padding: 14px;
    border-radius: 5px;
    justify-content: center;
    margin: 10px 0;
`;

export default AddPortfolioModal;