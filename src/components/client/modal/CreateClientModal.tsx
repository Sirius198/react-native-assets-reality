import BaseModal from "../../common/modal";
import ModalHeader from "../../common/modal/ModalHeader";
import ModalTitle from "../../common/modal/ModalTitle";

export default function CreateClientModal({ show, onClose }) {
    return (
        <BaseModal show={show}>

            <ModalHeader onClose={onClose} showBackButton={false}>
                <ModalTitle title="Create Client" />
            </ModalHeader>
        </BaseModal>
    )
}