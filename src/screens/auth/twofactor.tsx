import Typography from "../../components/common/typography/Typography";
import styled from 'styled-components/native';
import OneDigitInput from "../../components/common/input/OneDigitInput";
import { useDispatch, useSelector } from "react-redux";
import { Image, TouchableOpacity, Pressable, Keyboard, View } from "react-native";
import http from "../../utils/https-common";
import headers from "../../redux/actions/headers";
import { confirm2FA } from "../../redux/actions/authActions";
import AuthCodeInput from "../../components/common/input/AuthCodeInput";
import { useEffect, useState } from "react";

const TwoFactorPage = () => {

    const QRvalue = useSelector((state: any) => state.auth.qrCode);
    const auth = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 6;

    useEffect(() => {
        if (isPinReady) {
            dispatch(confirm2FA({ code: otpCode, authToken: auth.token }));
        }
    }, [isPinReady]);

    return (
        <Wrapper onPress={Keyboard.dismiss}>
            <Typography size={25} weight="Bold" align='center'>Two-Factor Authentication</Typography>
            <Typography align='center' variant='secondary' mb={20}>
                Scan the QR code and enter the six digit password
            </Typography>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                <Image
                    source={{ uri: 'https://api.assetreality.org/api/v1/' + QRvalue }}
                    style={{
                        width: 200,
                        height: 200,
                    }}
                />
            </View>

            {/* <DigitsWrapper>
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <OneDigitInput key={index}></OneDigitInput>
                ))}
            </DigitsWrapper> */}

            <AuthCodeInput
                code={otpCode}
                setCode={setOTPCode}
                maximumLength={maximumCodeLength}
                setIsPinReady={setIsPinReady}
            />

            {/* <TouchableOpacity onPress={sendd}>
                <Typography>Click</Typography>
            </TouchableOpacity> */}
        </Wrapper>
    )
};

const Wrapper = styled.Pressable`
    flex: 1;
    justify-content: center;
    background-color: #FFF;
`;

const DigitsWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
`;

const DigitInput = styled.TextInput`
    width: 52px;
    height: 52px;
    border: 1px solid rgb(230, 230, 248);
    border-radius: 10px;
    text-align: center;
    font-size: 30px;
`;

export default TwoFactorPage;