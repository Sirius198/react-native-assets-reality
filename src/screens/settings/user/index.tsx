import { useLayoutEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';
import MainContentWrapper from "../../../components/common/base/MainContentWrapper";
import MenuPlusButton from "../../../components/common/buttons/MenuPlusButton";
import Typography from "../../../components/common/typography/Typography";
import InviteMemberModal from "../../../components/settings/user/modal/InviteMemberModal";
import MemberRemoveConfirmModal from "../../../components/settings/user/modal/MemberRemoveConfirmModal";
import RoleAssignConfirmModal from "../../../components/settings/user/modal/RoleAssignConfirmModal";
import RoleAssignSelectionModal from "../../../components/settings/user/modal/RoleAssignSelectionModal";
import SimpleTab from "../../../components/settings/user/SimpleTab";
import UserCard from "../../../components/settings/user/UserCard";

const SettingsUser = ({ navigation }) => {

    // Selected role among Admins(0), Users(1) and Viewers(2) from SimpleTab
    const [role, setRole] = useState(0);

    const [memberId, setMemberId] = useState(-1);
    const [roleSelectionModalShow, setRoleSelectionModalShow] = useState(false);
    const [roleConfirmModalShow, setRoleConfirmModalShow] = useState(false);
    const [memberRemoveConfirmModalShow, setMemberRemoveConfirmModalShow] = useState(false);
    const [inviteModalShow, setInviteModalShow] = useState(false);

    // When the user clicks Kenbab button to change the role, it shows RoleSelectionModal
    const onAttemptChangeRole = (member_id) => {
        setMemberId(member_id);
        setRoleSelectionModalShow(true)
    };

    const removeMember = () => {
        setMemberRemoveConfirmModalShow(false);
    };

    const assignRole = () => {
        setRoleConfirmModalShow(false);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography size={14}>Manage Users</Typography>
                    <Typography weight="Bold" size={18}>User Management</Typography>
                </View>
            ),
            headerRight: () => (
                <MenuPlusButton
                    onPress={() => setInviteModalShow(true)}
                />
            ),
        })
    }, []);

    return (
        <MainContentWrapper>
            <SimpleTab list={['Admins', 'Users', 'Viewers']} />

            <Typography weight="SemiBold" size={20} style={{ marginTop: 14 }}>
                <Typography weight="SemiBold" size={20} style={{ color: '#3E7EFF' }}>4</Typography> Members in Admins
            </Typography>
            <Typography variant="secondary" size={14} style={{ marginBottom: 16 }}>Users can have access to portfolios</Typography>

            {[1, 2, 3, 4].map((_, index) => (
                <UserCard key={index} onAttemptChangeRole={onAttemptChangeRole} />
            ))}

            {/* Modals */}

            <RoleAssignSelectionModal
                show={roleSelectionModalShow}
                onClose={() => setRoleSelectionModalShow(false)}
                currentRole={role}
                // onChange={() => setRoleConfirmModalShow(true)}
                onRemove={() => {
                    setRoleSelectionModalShow(false);
                    setMemberRemoveConfirmModalShow(true);
                }}
                onAssign={() => {
                    setRoleSelectionModalShow(false);
                    setRoleConfirmModalShow(true);
                }}
            />

            <RoleAssignConfirmModal
                show={roleConfirmModalShow}
                onClose={() => {
                    setRoleConfirmModalShow(false);
                    setRoleSelectionModalShow(true);
                }}
                onAssign={assignRole}
            />

            <MemberRemoveConfirmModal
                show={memberRemoveConfirmModalShow}
                onClose={() => {
                    setMemberRemoveConfirmModalShow(false);
                    setRoleSelectionModalShow(true);
                }}
                onRemove={removeMember}
            />

            <InviteMemberModal
                show={inviteModalShow}
                onClose={() => setInviteModalShow(false)}
            />

        </MainContentWrapper>
    )
};

export default SettingsUser