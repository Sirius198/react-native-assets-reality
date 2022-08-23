import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components/native';

type AuthCodeInputProps = {
    code: string;
    setCode: () => void;
    maximumLength: number;
    setIsPinReady: () => void;
};

const AuthCodeInput = ({
    code,
    setCode,
    maximumLength,
    setIsPinReady
}) => {

    const inputRef = useRef();
    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);
    const boxArray = new Array(maximumLength).fill(0);

    useEffect(() => {
        // update pin ready status
        setIsPinReady(code.length === maximumLength);
        // clean up function
        return () => {
            setIsPinReady(false);
        };
    }, [code]);

    const boxDigit = (_, index: number) => {
        const emptyInput = "";
        const digit = code[index] || emptyInput;

        const isCurrentValue = index === code.length;
        const isLastValue = index === maximumLength - 1;
        const isCodeComplete = code.length === maximumLength;

        const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

        const StyledSplitBoxes =
            isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;
        return (
            <StyledSplitBoxes key={index}>
                <SplitBoxText>{digit}</SplitBoxText>
            </StyledSplitBoxes>
        );
    }

    const handleOnPress = () => {
        setIsInputBoxFocused(true);
        inputRef.current.focus();
    };

    const handleOnBlur = () => {
        setIsInputBoxFocused(false);
    };

    return (
        <OTPInputContainer>
            <SplitOTPBoxesContainer onPress={handleOnPress}>{boxArray.map(boxDigit)}</SplitOTPBoxesContainer>
            <TextInputHidden
                value={code}
                onChangeText={setCode}
                maxLength={maximumLength}
                ref={inputRef}
                onBlur={handleOnBlur}
            />
        </OTPInputContainer>
    )
};

const OTPInputContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 0px;
`;

const TextInputHidden = styled.TextInput`
    position: absolute;
    opacity: 0;
`;

const SplitOTPBoxesContainer = styled.Pressable`
    width: 80%;
    flex-direction: row;
    justify-content: space-evenly;
`;
const SplitBoxes = styled.View`
    border-color: #e5e5e5;
    border-width: 2px;
    border-radius: 5px;
    padding: 12px;
    min-width: 50px;
    min-height: 55px;
`;
const SplitBoxesFocused = styled(SplitBoxes)`
    border-color: #f03521;
`;

const SplitBoxText = styled.Text`
    font-size: 20px;
    text-align: center;
    color: #000;
`;

export default AuthCodeInput;