import { useLayoutEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native'
import AssetItem from '../../../components/cases/detail/AssetItem';
import MenuPlusButton from '../../../components/common/buttons/MenuPlusButton';
import SearchBox from '../../../components/common/input/SearchBox';
import Typography from '../../../components/common/typography/Typography';

export default function TotalAssetsPage({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Typography weight="Bold" size={18}>Total Assets</Typography>
                    <Typography variant="secondary" size={14}>in Total</Typography>
                </View>
            ),
            headerRight: () => (
                <MenuPlusButton
                    onPress={() => { }}
                />
            ),
        })
    }, []);

    return (
        <Wrapper>
            <SearchBox style={{ marginBottom: 16 }} />

            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <AssetItem key={index} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.ScrollView`
    padding: 20px;
`;