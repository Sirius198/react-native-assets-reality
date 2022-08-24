import { useTheme } from '@react-navigation/native';
import styled from 'styled-components/native'
import { PrimaryButton } from '../styles';
import Typography from '../typography/Typography';

interface IModalDefaultActions {
    onOk?: Function | null;
    onCancel?: Function | null;
    OkButtonText?: string;
    CancelButtonText?: string;
}

const ModalDefaultActions = ({
    onOk = null,
    onCancel = null,
    OkButtonText = "OK",
    CancelButtonText = "Cancel",
}: IModalDefaultActions) => {
    const { dark } = useTheme();
    return (
        <Wrapper>
            <CancelButton
                dark={dark}
                style={{ flexGrow: 5, marginRight: 10 }}
                onPress={() => {
                    onCancel && onCancel()
                }}
            >
                <Typography weight='Medium'>{CancelButtonText}</Typography>
            </CancelButton>

            <OkButton
                style={{ flexGrow: 7, marginLeft: 10 }}
                onPress={() => {
                    onOk && onOk()
                }}
            >
                <Typography weight="Medium" style={{ color: 'white' }}>{OkButtonText}</Typography>
            </OkButton>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex-direction: row;
`;

const CancelButton = styled.TouchableOpacity`
    background-color: ${(props: any) => props.dark ? 'rgba(53, 57, 70, 0.3)' : '#f7f8fa'};
    padding: 17px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

const OkButton = styled(CancelButton)`
    background-color: #3e7eff;
`;

export default ModalDefaultActions