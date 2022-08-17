import styled from 'styled-components/native'
import FormInput from '../../../common/form/FormInput';
import FormLabel from '../../../common/form/FormLabel';
import BaseModal from '../../../common/modal';
import ModalDefaultActions from '../../../common/modal/ModalDefaultActions';
import ModalHeader from '../../../common/modal/ModalHeader';
import ModalTitle from '../../../common/modal/ModalTitle';
import Typography from '../../../common/typography/Typography';

const CreateGroupModal = ({ show, onClose }) => {
    return (
        <BaseModal show={show}>
            <ModalHeader onClose={onClose}>
                {/* <Typography size={18} weight="SemiBold">Create Group</Typography> */}
                <ModalTitle title="Create Group" />
            </ModalHeader>

            <FormLabel>Enter Group Name</FormLabel>
            <FormInput placeholder="Development" style={{ marginBottom: 50 }} />

            <ModalDefaultActions
                OkButtonText='Done'
                onCancel={onClose}
                onOk={onClose}
            />
        </BaseModal>
    )
};

export default CreateGroupModal