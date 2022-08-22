import { View, TouchableOpacity, Modal } from "react-native"
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MySVG from "../svg";
import HeaderButton from "../buttons/HeaderButton";

const ModalHeader = ({ showBackButton = true, showCloseButton = true, onClose, children, ...rest }) => {
    return (
        <Wrapper {...rest}>
            {/* Back Button and Content */}
            <Div>
                {showBackButton &&
                    <ModalButton marginRight={10} onPress={onClose}>
                        <MySVG.AngleLeft style={{ color: '#363853' }} />
                    </ModalButton>
                }
                {children}
            </Div>
            {/* {showCloseButton && <ModalButton onPress={onClose}>
                <MySVG.XIcon style={{ color: '#363853' }} />
            </ModalButton>} */}
            {showCloseButton && <HeaderButton type="close" onPress={onClose} />}
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`;

const Div = styled.View`
    flex-direction: row;
    align-items: center;
`;

const ModalButton = styled.TouchableOpacity`
    border-radius: 100px;
    background-color: rgb(244, 244, 244);
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin-right: ${props => props.marginRight ? props.marginRight + 'px' : '0'};
`;

export default ModalHeader;