import styled from 'styled-components/native';
import FormInput from '../../common/form/FormInput';
import FormLabel from '../../common/form/FormLabel';

export default function OrganisationDetailPanel() {
    return (
        <Wrapper>

            <FormLabel>Organisation name</FormLabel>
            <FormInput variant='bordered' />

            <FormLabel>Email address for deposits and withdrawls</FormLabel>
            <FormInput variant='bordered' />

            <FormLabel>Country</FormLabel>
            <FormInput variant='bordered' />

            <FormLabel>Email address for alerts and documentation</FormLabel>
            <FormInput variant='bordered' />

            <FormLabel>Phone number</FormLabel>
            <FormInput variant='bordered' />
        </Wrapper>
    )
}

const Wrapper = styled.View``;