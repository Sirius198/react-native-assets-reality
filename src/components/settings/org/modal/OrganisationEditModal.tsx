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
            <FormInput variant={"4"} placeholder="Client Contact Person" />

            <FormLabel>Address</FormLabel>
            <FormInput variant={"4"} placeholder="Kemp House, 152-160 City Road, London" />

            <FormLabel>Phone Number</FormLabel>
            <FormInput variant={"4"} />

            <FormLabel>Email</FormLabel>
            <FormInput variant={"4"} placeholder="elliot@assetreality.io" />

            <FormLabel>Country</FormLabel>
            <FormInput variant={"4"} placeholder="United Kingdom" />

            <ModalDefaultActions
                OkButtonText="Update"
            />
        </BaseModal>
    )
};

export default OrganisationEditModal;