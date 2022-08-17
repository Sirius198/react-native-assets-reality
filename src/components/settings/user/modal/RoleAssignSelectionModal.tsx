import { useState } from "react";
import BaseModal from "../../../common/modal";
import ModalHeader from "../../../common/modal/ModalHeader";
import Typography from "../../../common/typography/Typography";
import styled from 'styled-components/native';
import { useTheme } from "@react-navigation/native";
import Divider from "../../../common/divider";
import MySVG from "../../../common/svg";
import MemberRemoveConfirmModal from "./MemberRemoveConfirmModal";

const roleList = ['Admin', 'User', 'Viewer'];

const RoleAssignSelectionModal = ({ show, onClose, currentRole, onRemove, onAssign }) => {

    const { dark } = useTheme();

    return (
        <BaseModal show={show}>
            <ModalHeader onClose={onClose} style={{ marginBottom: 20 }}>
                <Typography size={18} weight="SemiBold">Role</Typography>
            </ModalHeader>

            {roleList.filter((role, index) => index != currentRole).map((role, index) => (
                <BigButton
                    dark={dark}
                    key={index}
                    primary={index === 0}
                    onPress={() => onAssign(0)}
                >
                    <Typography size={15} weight="SemiBold" style={{ marginBottom: 8 }}>Assign as {role}</Typography>
                    <Typography size={14} variant="secondary">Manage the Workspace, add or remove custodians</Typography>
                </BigButton>
            )
            )}

            <Divider />

            <RemoveButton onPress={onRemove}>
                <MySVG.Trash style={{ color: '#E21B1B', marginRight: 5 }} />
                <Typography size={12} style={{ color: '#E21B1B' }}>Remove from Workspace</Typography>
            </RemoveButton>

        </BaseModal>
    )
};

const BigButton = styled.TouchableOpacity`
    padding: 12px 15px;
    border: 1px solid;
    border-radius: 10px;
    background-color: ${({ primary, dark }) => primary ? '#3E7EFF' : dark ? 'rgba(53,57,70,0.25)' : '#fff'};
    border-color: ${({ primary, dark }) => primary ? '#3E7EFF' : dark ? '#353946' : '#F0F0FA'};
    margin-bottom: 12px;
`;

const RemoveButton = styled.TouchableOpacity`
    background-color: rgba(226, 27, 27, 0.08);
    padding: 17px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export default RoleAssignSelectionModal;