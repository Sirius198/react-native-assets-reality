import Divider from "../../../common/divider";
import BaseModal from "../../../common/modal";
import ModalDefaultActions from "../../../common/modal/ModalDefaultActions";
import ModalHeader from "../../../common/modal/ModalHeader";
import Typography from "../../../common/typography/Typography";

const RoleAssignConfirmModal = ({ onClose, show, onAssign }) => {
    return (
        <BaseModal show={show}>

            <ModalHeader onClose={onClose}>
                <Typography size={18} weight="Bold">Assign as Admin?</Typography>
            </ModalHeader>

            <Typography variant="secondary">
                If you assign Hugo Elliot as an Admin they will be able to add and remove Members — and manage the protfolios.
            </Typography>

            <Divider />

            <ModalDefaultActions
                OkButtonText="Assign as Admin"
                onCancel={onClose}
                onOk={onAssign}
            />
        </BaseModal>
    )
};

export default RoleAssignConfirmModal