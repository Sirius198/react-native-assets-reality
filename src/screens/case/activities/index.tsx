import { useLayoutEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native'
import ActivityItem from '../../../components/cases/detail/ActivityItem';
import AssetItem from '../../../components/cases/detail/AssetItem';
import MenuPlusButton from '../../../components/common/buttons/MenuPlusButton';
import SearchBox from '../../../components/common/input/SearchBox';
import Typography from '../../../components/common/typography/Typography';

export default function ActivityPage({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography weight="Bold" size={18}>Recent Activity</Typography>
                    <Typography variant="secondary" size={14}>in Total</Typography>
                </View>
            ),
        })
    }, []);

    return (
        <Wrapper>
            <SearchBox style={{ marginBottom: 16 }} />

            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <ActivityItem key={index} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.ScrollView`
    padding: 20px;
`;