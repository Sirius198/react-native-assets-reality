import BaseModal from "../../common/modal";
import ModalHeader from "../../common/modal/ModalHeader";
import ModalTitle from "../../common/modal/ModalTitle";

export default function AddAssetModal({ show, onClose }) {
    return (
        <BaseModal show={show}>
            <ModalHeader onClose={onClose}>
                <ModalTitle title="Add Asset" />
            </ModalHeader>
        </BaseModal>
    )
}