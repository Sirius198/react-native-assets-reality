import { ScrollView, View, Image } from "react-native";
import EmptyActivity from "../../components/activity/EmptyActivity";
import PageHeader from "../../components/common/header";
import Typography from "../../components/common/typography/Typography";
import styled from 'styled-components/native'
import ActivityLogItem from "../../components/activity/ActivityLogItem";
import { Calendar } from 'react-native-inline-calendar'
import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect, useState } from "react";
import { CoinList } from "../../constants/FilteredData";
import CryptoIcon from "../../components/common/svg/CryptoIcon";

const ActivityScreen = () => {
    const isEmpty = false;

    const [cryptoDropdownOpen, setCryptoDropdownOpen] = useState(false);
    const [cryptoValue, setCryptoValue] = useState(null);
    const [cryptoList, setCryptoList] = useState<any[]>([]);
    useEffect(() => {
        let list = [];
        for (var i = 0; i < CoinList.length; i++) {
            const coinName = CoinList[i].toLowerCase();
            list.push({
                label: CoinList[i],
                value: CoinList[i],
                icon: () => <CryptoIcon name={coinName} size={20} />
            });
        }
        setCryptoList(list);
    }, []);

    if (isEmpty) {
        return (
            <EmptyWrapper>
                <PageHeader title={<Typography size={18}>Activity</Typography>} />
                <EmptyActivity />
            </EmptyWrapper>
        )
    }

    return (
        <ScrollViewWrapper>

            <DropDownPicker
                open={cryptoDropdownOpen}
                value={cryptoValue}
                items={cryptoList}
                setOpen={setCryptoDropdownOpen}
                setValue={setCryptoValue}
                setItems={setCryptoList}

                listItemLabelStyle={{
                    // backgroundColor: 'rgba(45, 116, 255, 0.02)'
                    color: '#23262F',
                    fontFamily: 'FF_SemiBold',
                    fontSize: 12
                }}
                labelStyle={{
                    color: '#23262F',
                    fontFamily: 'FF_SemiBold',
                    fontSize: 12
                }}
                placeholderStyle={{
                    color: '#23262F',
                    fontFamily: 'FF_SemiBold',
                    fontSize: 12
                }}
                style={{
                    backgroundColor: 'rgba(45, 116, 255, 0.02)',
                    borderColor: '#E7E8EF',
                }}
                listItemContainerStyle={{
                    backgroundColor: 'rgba(45, 116, 255, 0.02)'
                }}
                placeholder="Select crypto"
                modalTitle="Modal title"
                showBadgeDot={true}
                badgeColors="red"
                dropDownContainerStyle={{
                    borderColor: "#E7E8EF",
                    // backgroundColor: 'rgba(45, 116, 255, 0.02)'
                }}
            />

            <PageHeader title={<Typography size={18}>Activity</Typography>} />

            <Calendar showAgenda={false} />

            {[1, 2, 3, 4, 5, 5,].map((_, index) => (
                <ActivityLogItem key={index} />
            ))}
        </ScrollViewWrapper>
    )
};

const EmptyWrapper = styled.View`
    flex: 1;
    padding: 20px;
`;

const ScrollViewWrapper = styled.ScrollView`
    padding: 20px;
`;

export default ActivityScreen;