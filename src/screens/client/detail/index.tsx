import styled from 'styled-components/native';
import { useLayoutEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import MenuPlusButton from "../../../components/common/buttons/MenuPlusButton";
import Typography from '../../../components/common/typography/Typography';
import SearchBox from '../../../components/common/input/SearchBox';
import AvatarList from '../../../components/client/detail/AvatarList';
import Avatar from '../../../components/common/base/Avatar';
import { useTheme } from '@react-navigation/native';
import OrganisationDetailPanel from '../../../components/client/detail/OrganisationDetailPanel';
import SimpleTab from '../../../components/client/detail/SimpleTab';


export default function ClientDetailPage({ navigation }) {

    const { dark, colors } = useTheme();
    const [tabId, setTabId] = useState(0);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography weight="Bold" size={18}>Operation</Typography>
                </View>
            ),
        })
    }, []);

    return (
        <Wrapper>
            <SearchBox />

            <AvatarList />

            <SummaryWrapper backgroundColor={colors.card}>
                <Avatar alt="MH" size={60} fontSize={16} fontWeight="SemiBold" style={{ marginRight: 15 }} />
                <View>
                    <Typography size={18} weight="SemiBold">John Doe</Typography>
                    <Typography style={{ color: '#3E7EFF' }}>(+44) 573 635 623</Typography>
                </View>
            </SummaryWrapper>

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                {/* <OrganisationDetailPanel /> */}
                <SimpleTab onChange={(id) => setTabId(id)} />

                {tabId === 0 && <></>}
                {tabId === 1 && <OrganisationDetailPanel></OrganisationDetailPanel>}
            </ScrollView>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    padding: 20px;
    flex: 1;
`;

const SummaryWrapper = styled.View`
    background-color: ${props => props.backgroundColor};
    padding: 16px;
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
    margin: 24px 0 12px 0;
`;