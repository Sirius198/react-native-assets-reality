import { useEffect, useState } from "react";
import { View } from "react-native";
import FormInput from "../../../common/form/FormInput";
import FormLabel from "../../../common/form/FormLabel";
import BaseModal from "../../../common/modal";
import ModalDefaultActions from "../../../common/modal/ModalDefaultActions";
import ModalHeader from "../../../common/modal/ModalHeader";
import Typography from "../../../common/typography/Typography";

const OrganisationEditModal = ({ show, onClose }) => {
    const [visible, setVisible] = useState(show);
    const [orgData, setOrgData] = useState({});

    useEffect(() => { setVisible(show); }, [show]);

    return (
        <BaseModal show={visible}>
            <ModalHeader onClose={onClose} showBackButton={false}>
                <Typography size={18} weight="Bold">Organisation Detail</Typography>
            </ModalHeader>

            <FormLabel>Organisation name</FormLabel>
            <FormInput placeholder="Client Contact Person" />

            <FormLabel>Address</FormLabel>
            <FormInput placeholder="Kemp House, 152-160 City Road, London" />

            <FormLabel>Phone Number</FormLabel>
            <FormInput />

            <FormLabel>Email</FormLabel>
            <FormInput placeholder="elliot@assetreality.io" />

            <FormLabel>Country</FormLabel>
            <FormInput placeholder="United Kingdom" />

            <ModalDefaultActions
                OkButtonText="Update"
            />
        </BaseModal>
    )
};

export default OrganisationEditModal;