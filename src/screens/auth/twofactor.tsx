import Typography from "../../components/common/typography/Typography";
import styled from 'styled-components/native';
import OneDigitInput from "../../components/common/input/OneDigitInput";
import { useSelector } from "react-redux";
import { Image, TouchableOpacity } from "react-native";
import http from "../../utils/https-common";
import headers from "../../redux/actions/headers";

const TwoFactorPage = () => {

    const QRvalue = useSelector((state: any) => state.auth.qrCode);
    const auth = useSelector((state: any) => state.auth);
    console.log(auth)

    const sendd = () => {
        http
            .get(`user/${auth.token}/2fa`, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Credentials": "true",
                    "X-Requested-With": "XMLHttpRequest",
                    "AR-Token": `${null}`,
                    Authorization: `Bearer ${null}`,
                }
            }
            )
            .then((res) => {
                const data = res.data.data;
                console.log(data)
            })
            .catch((err) => {
                console.log(err, err.response.data, auth.token);
            })
    };

    return (
        <Wrapper>
            <Typography size={25} weight="Bold" align='center'>Two-Factor Authentication</Typography>
            <Typography align='center' variant='secondary' mb={50}>
                Scan the QR code and enter the six digit password
            </Typography>

            <Image source={{ uri: 'https://api.assetreality.org/api/v1/' + QRvalue }} />

            <DigitsWrapper>
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <OneDigitInput key={index}></OneDigitInput>
                ))}
            </DigitsWrapper>

            <TouchableOpacity onPress={sendd}>
                <Typography>Click</Typography>
            </TouchableOpacity>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    background-color: #fff;
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