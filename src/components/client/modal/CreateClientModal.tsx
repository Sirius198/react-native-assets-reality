import FormInput from "../../common/form/FormInput";
import FormLabel from "../../common/form/FormLabel";
import BaseModal from "../../common/modal";
import ModalDefaultActions from "../../common/modal/ModalDefaultActions";
import ModalHeader from "../../common/modal/ModalHeader";
import ModalTitle from "../../common/modal/ModalTitle";

export default function CreateClientModal({ show, onClose }) {
    return (
        <BaseModal show={show}>

            <ModalHeader onClose={onClose} showBackButton={false}>
                <ModalTitle title="Create Client" />
            </ModalHeader>

            <FormLabel>Client Name</FormLabel>
            <FormInput variant={"4"} placeholder="Client Contact Person" />

            <FormLabel>Organisation</FormLabel>
            <FormInput variant={"4"} placeholder="Client Contact Person" />

            <FormLabel>Phone Number</FormLabel>
            <FormInput variant={"4"} placeholder="" />

            <FormLabel>Email</FormLabel>
            <FormInput variant={"4"} placeholder="Enter Client Email" />

            <FormLabel>Admin Screen</FormLabel>
            <FormInput variant={"4"} placeholder="Enter Screen" />

            <ModalDefaultActions
                OkButtonText="Create"
                onCancel={onClose}
            />
        </BaseModal>
    )
}