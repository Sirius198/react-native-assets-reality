import { ScrollView, View } from "react-native";
import EmptyActivity from "../../components/activity/EmptyActivity";
import PageHeader from "../../components/common/header";
import Typography from "../../components/common/typography/Typography";
import styled from 'styled-components/native'
import ActivityLogItem from "../../components/activity/ActivityLogItem";
import { Calendar } from 'react-native-inline-calendar'

const ActivityScreen = () => {
    const isEmpty = false;

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
            <PageHeader title={<Typography size={18}>Activity</Typography>} />

            <Calendar showAgenda={false} />

            {[1,2,3,4,5,5,].map((_, index) => (
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