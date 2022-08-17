import { useEffect, useState } from "react"
import { View } from "react-native"
import OutlineButton from "../../../common/buttons/OutlineButton"
import FormInput from "../../../common/form/FormInput"
import BaseModal from "../../../common/modal"
import ModalDefaultActions from "../../../common/modal/ModalDefaultActions"
import ModalHeader from "../../../common/modal/ModalHeader"
import Typography from "../../../common/typography/Typography"
import InvitingMember from "./InvitingMember"

interface IMember {
    email: string;
    name: string;
}

const InviteMemberModal = ({ show, onClose }) => {

    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [members, setMembers] = useState<IMember[]>([]);
    const [currentMember, setMember] = useState<IMember>();

    useEffect(() => {
        setMember({
            name: username,
            email: email
        });
        console.log('hi', email, username)
    }, [email, username]);

    const addToList = () => {
        // console.log(email, username)
        // if (email == '' || username == '')
        //     return;

        // const m: IMember = { email: email, name: username };

        setMembers([...members, currentMember])
    };

    const removeMember = (idx) => {
        const temp = [...members];
        temp.splice(idx, 1);
        setMembers(temp);
    };

    return (
        <BaseModal show={show}>
            <ModalHeader onClose={onClose}>
                <Typography size={18} weight="Bold">Invite Members</Typography>
            </ModalHeader>

            <FormInput
                placeholder="Enter your email"
                value={email}
                onChange={({ text }) => setEmail(text)}
            />

            <FormInput
                placeholder="Enter your user name"
                value={username}
                onChange={({ text }) => setUsername(text)}
            />

            <View
                style={{ flexDirection: 'row', marginBottom: 16 }}
            >
                <OutlineButton text="Add as Admin" style={{ flexGrow: 8, marginRight: 10 }} />
                <OutlineButton
                    text="Add To List"
                    icon="plus"
                    style={{ flexGrow: 4, marginLeft: 10 }}
                    onPress={() => addToList()}
                />
            </View>

            {members.map((m, index) => (
                <InvitingMember
                    key={index}
                    name={m.name}
                    email={m.email}
                    onRemove={() => removeMember(index)}
                />
            ))}

            <ModalDefaultActions
                OkButtonText="Add Member"
                onCancel={onClose}
            />
        </BaseModal>
    )
}

export default InviteMemberModal