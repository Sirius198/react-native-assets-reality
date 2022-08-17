import BaseModal from "../../../common/modal";
import ModalHeader from "../../../common/modal/ModalHeader";
import Typography from "../../../common/typography/Typography";
import styled from 'styled-components/native'
import { useTheme } from "@react-navigation/native";
import Divider from "../../../common/divider";
import MySVG from "../../../common/svg";

const MemberRemoveConfirmModal = ({ show, onClose, onRemove }) => {

    const { dark } = useTheme();

    return (
        <BaseModal show={show} style={{ zindex: 10 }}>
            <ModalHeader onClose={onClose}>
                <Typography size={18} weight="SemiBold">Remove this Memeber?</Typography>
            </ModalHeader>

            <Typography variant="secondary" size={12} style={{ marginBottom: 15 }}>
                After you remove Hugo Elliot they won't be able to view or comment on documents in this Workspace anymore.
            </Typography>

            <Typography variant="secondary" size={12}>
                Hugo Elliot may still have private Drafts in this Workspace. Make sure they back up their work before you remove them.
            </Typography>

            <NameWrapper>
                <Typography size={14} weight="SemiBold">John Doe</Typography>
                <Typography size={12} variant="secondary">johndoe2211@gmail.com</Typography>
            </NameWrapper>

            <Divider />

            <ActionWrapper>
                <CancelButton dark={dark} onPress={onClose}>
                    <Typography weight="Medium" size={12}>Cancel</Typography>
                </CancelButton>
                <RemoveButton onPress={onRemove}>
                    <MySVG.Trash style={{ color: 'white', marginRight: 5 }} />
                    <Typography style={{ color: 'white' }} weight="Medium" size={12}>Remove Member</Typography>
                </RemoveButton>
            </ActionWrapper>
        </BaseModal>
    )
};

const NameWrapper = styled.View`
    border-radius: 10px;
    padding: 15px 20px;
    margin-top: 16px;
    border: 1px solid;
    border-color: #E21B1B;
    background-color: rgba(226, 27, 27, 0.04);
`;

const ActionWrapper = styled.View`
    flex-direction: row;
`;

const CancelButton = styled.TouchableOpacity`
    flex-grow: 5;
    align-items: center;
    justify-content: center;
    padding: 17px;
    border-radius: 10px;
    background-color: ${props => props.dark ? 'rgba(53, 57, 70, 0.3)' : '#F7F8FA'};
    margin-right: 10px;
`;

const RemoveButton = styled.TouchableOpacity`
    flex-grow: 7;
    flex-direction: row;
    background-color: #E21B1B;
    align-items: center;
    justify-content: center;
    padding: 17px;
    border-radius: 10px;
    margin-left: 10px;
`;

export default MemberRemoveConfirmModal;