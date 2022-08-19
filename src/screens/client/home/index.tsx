import { useLayoutEffect, useState } from "react";
import { View } from "react-native";
import MenuPlusButton from "../../../components/common/buttons/MenuPlusButton";
import Typography from "../../../components/common/typography/Typography";
import styled from 'styled-components/native';
import SearchBox from "../../../components/common/input/SearchBox";
import ClientCard from "../../../components/client/ClientCard";
import CreateClientModal from "../../../components/client/modal/CreateClientModal";

export default function ClientHome({ navigation }) {

    const [showCreateModal, setShowCreateModal] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography weight="Bold" size={18}>Clients</Typography>
                    <Typography size={12} style={{ color: '#3E7EFF' }}>Jul 23 2022</Typography>
                </View>
            ),
            headerRight: () => (
                <MenuPlusButton
                    onPress={() => setShowCreateModal(true)}
                />
            ),
        })
    }, []);

    const goToDetail = (client_id) => {
        navigation.navigate("Detail");
    }

    return (
        <Wrapper>
            <SearchBox style={{ marginBottom: 16 }} />

            {[1, 2, 3, 4, 5].map((_, index) => (
                <ClientCard
                    key={index}
                    onPress={(client_id) => goToDetail(client_id)}
                />
            ))}

            <CreateClientModal
                show={showCreateModal}
                onClose={() => setShowCreateModal(false)}
            />
        </Wrapper>
    )
}

const Wrapper = styled.ScrollView`
    padding: 20px;
`;